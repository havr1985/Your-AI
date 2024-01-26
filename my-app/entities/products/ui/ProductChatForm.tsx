"use client"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import OpenAI from "openai";
import { FC, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useGetChatMutation } from "../api/productApi";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";


interface IProductChatFormsProps {

}

const formSchema = z.object({
    prompt: z.string().min(2, {
        message: "Must be at least 2 characters"
    }),
});

const ProductChatForm: FC<IProductChatFormsProps> = () => {
    const messagesEndRef = useRef(null)
    const [messages, setMessages] = useState<OpenAI.Chat.ChatCompletionMessageParam[]>([]);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: "",
        },
    });

    const [getChat, {
        isSuccess,
        data,
        isLoading,
    }] = useGetChatMutation();

    useEffect(() => {
        if (isSuccess) {
            setMessages((prevMessage) => [...prevMessage, data])
            
        }
    }, [isSuccess, data])

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"})
    }

    function onSubmit(values: z.infer<typeof formSchema>) {
        const userMessage: OpenAI.Chat.ChatCompletionMessageParam = {
            role: 'user',
            content: values.prompt,
        }
        setMessages((prevMessage) => [...prevMessage, userMessage]);
        getChat({
            messages: [...messages, userMessage]

        })
        form.reset();
    };

    return (
        <div className=" px-4 md:w-[70%] md:mx-auto">
            <ScrollArea className="h-[75vh]">
                <div className=" text-sm flex flex-col gap-3 p-4 rounded bg-gray-200">
                    {!messages?.length && 'Enter your question'}
                    {messages.map(({ role, content }, idx) => (
                        <div key={idx} className=" flex gap-3">
                            <div>
                                <Avatar>
                                    <AvatarFallback>
                                        {role === 'user' && 'CU'}
                                        {role === 'assistant' && 'AI'}
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                            <div>{content}</div>

                        </div>
                    ))}
                </div>
                <div ref={messagesEndRef}></div>
            </ScrollArea>
            {isLoading && (
                <div>Loading...</div>
            )}
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2 mt-2">
                    <FormField
                        control={form.control}
                        name="prompt"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Your question" {...field} className=" focus:outline-none" />
                                </FormControl>
                            </FormItem>
                        )} />
                    <Button type="submit" className="w-full bg-green-900 hover:bg-green-400">SEND</Button>
                </form>
            </Form>
        </div>
    )
};

export default ProductChatForm;
