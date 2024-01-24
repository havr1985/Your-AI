import CabinetList from "@/components/layouts/CabinetList";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronRightCircle } from "lucide-react";
import { FC, ReactNode } from "react";



interface ICabinetLayouProps {
    children: ReactNode;
}

const CabinetLayout: FC<ICabinetLayouProps> = ({ children }) => {
    return (
        <div className=" flex flex-col md:flex-row">
            <Sheet>
                <div className=" hidden md:block bg-green-950 text-white min-h-screen p-4 w-[300px]">
                    <CabinetList />
                </div>
                <SheetTrigger asChild className=" md:hidden">
                    <ChevronRightCircle />
                </SheetTrigger>
                <SheetContent side='left' className=" bg-green-950 text-white">
                    <CabinetList />
                </SheetContent>
            </Sheet>
            {children}
        </div>
    )
};

export default CabinetLayout;