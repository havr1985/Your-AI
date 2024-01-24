"use client"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";


interface IProductChatFormsProps {

}

const formSchema = z.object({
    prompt: z.string().min(2, {
        message: "Must be at least 2 characters"
    }),
});

const ProductChatForm: FC<IProductChatFormsProps> = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    };

    return (
        <div className=" px-4 md:w-[70%] md:mx-auto">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-2">
                    <FormField
                        control={form.control}
                        name="prompt"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Your question" {...field} />
                                </FormControl>
                            </FormItem>
                        )} />
                    <Button type="submit" className="w-full bg-green-950">SEND</Button>
                </form>
            </Form>
        </div>
    )
};

export default ProductChatForm;
