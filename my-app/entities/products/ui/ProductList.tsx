import { FC } from "react";
import { PRODUCTS } from "../static/products";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";



interface IProductListProps {

}

const ProductList: FC<IProductListProps> = () => {
    return (
        <div className=" flex flex-col md:flex-row gap-4">
            {PRODUCTS.map(({ title, description, icon, color }) => (
                <Card key={title} className=" flex-1 text-center bg-blue-900">
                    <CardHeader className=" flex flex-col gap-4 items-center">
                        <CardTitle className=" text-white ">{title}</CardTitle>
                        <div className={color}>{icon}</div>
                        
                    </CardHeader>
                    <CardContent className=" text-white">
                        {description}
                    </CardContent>
                </Card>
            ))}
        </div>
    )
};

export default ProductList;