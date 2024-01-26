import { PRODUCTS } from "@/entities/products/static/products";
import ProductChatForm from "@/entities/products/ui/ProductChatForm";
import ProductHeader from "@/entities/products/ui/ProductHeader";
import { FC } from "react";



interface ICabinetChatProps {

}

const CabinetChatPage: FC<ICabinetChatProps> = () => {
    const [chat] = PRODUCTS;
    return (
        <div className="bg-green-50 w-[100vw]">
            <div className="md:flex-1 flex flex-col justify-between h-[calc(100vh-50px)]">
                <ProductHeader {...chat}/>
                <ProductChatForm />
            </div>
        </div>
    )
}

export default CabinetChatPage;