import { FC } from "react";
import { PRODUCTS } from "../static/products";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";



interface IProductListProps {

}

const ProductList: FC<IProductListProps> = () => {
    return (
        <div className=" flex flex-col md:flex-row gap-4">
            {PRODUCTS.map(({ title, description, icon }) => (
                <Card key={title} className=" flex-1 text-center">
                    <CardHeader className=" flex flex-col items-center">
                        <CardTitle>{title}</CardTitle>
                        {icon}
                    </CardHeader>
                    <CardContent>
                        {description}
                    </CardContent>
                </Card>
            ))}
        </div>
    )
};

export default ProductList;