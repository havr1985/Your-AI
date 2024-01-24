import { ROUTES } from "@/app/config/routes";
import { PRODUCTS } from "@/entities/products/static/products";
import { CircleUserRound, LayoutDashboard } from "lucide-react";
import { type } from "os";
import { FC, ReactNode } from "react";
import { SheetClose } from "../ui/sheet";
import Link from "next/link";



interface ICabinetListProps {

}

type TMenuItem = {
    title: string;
    icon: ReactNode;
    color: string;
    link: string;
}

const MENU_ITEM: TMenuItem[] = [
    {
        title: 'Dashboard',
        icon: <LayoutDashboard />,
        color: 'text-white',
        link: ROUTES.cabinet.dashboard,
    },
    ...PRODUCTS,
    {
        title: 'Profile',
        icon: <CircleUserRound />,
        color: 'text-white',
        link: ROUTES.cabinet.profile,
    }
]

const CabinetList: FC<ICabinetListProps> = () => {
    return (
        <div className=" flex flex-col gap-2">
            {MENU_ITEM.map(({ title, color, icon, link }) => (
                <SheetClose key={title} asChild>
                    <Link href={link} className=" flex gap-2 p-3 hover:bg-black/30 cursor-pointer">
                        <div className={color}>{icon}</div>
                        <div>{title}</div>
                    </Link>
                </SheetClose>
            ))}
        </div>
    )
};

export default CabinetList;