import { FC, ReactNode } from "react";



interface IProductHeaderProps {
    title: string;
    icon: ReactNode;
    description: string;
    color: string;
};

const ProductHeader: FC<IProductHeaderProps> = ({ title, icon, description, color }) => {
    return (
        <div className=" bg-black/5 p-4 md:px-6">
            <div className=" flex gap-4 items-center">
                <div className={color}>
                    {icon}
                </div>
                <h2 className=" text-xl font-bold">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
};

export default ProductHeader;