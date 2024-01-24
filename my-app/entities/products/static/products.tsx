import { ReactNode } from "react";
import { IProduct } from "../model/IProduct";
import { Code, FileImage, MessageCircleMore, Music, Video } from "lucide-react";
import { ROUTES } from "@/app/config/routes";



interface IProductUI extends Pick<IProduct, 'title' | 'description'> {
    icon: ReactNode;
    color: string;
    link: string;
}

export const PRODUCTS: IProductUI[] = [
    {
        title: 'Chat AI',
        description: 'Спитай все що хочеш',
        icon: <MessageCircleMore />,
        color: 'text-green-700',
        link: ROUTES.cabinet.chat,
    },
    {
        title: 'Code Helper',
        description: 'Допомога у написанні коду',
        icon: <Code />,
        color: 'text-red-700',
        link: ROUTES.cabinet.code,
    },
    {
        title: 'Image Generate',
        description: 'Згенеруй свою картинку за допомогою АІ',
        icon: <FileImage />,
        color: 'text-yellow-700',
        link: ROUTES.cabinet.image,
    },
    {
        title: 'Audio Generate',
        description: 'Згенеруй музику своєї мрії',
        icon: <Music />,
        color: 'text-blue-700',
        link: ROUTES.cabinet.audio,
    },
    {
        title: 'Video Generate',
        description: 'Згенеруй відео своєї мрії',
        icon: <Video />,
        color: 'text-orange-700',
        link: ROUTES.cabinet.video,
    },
]