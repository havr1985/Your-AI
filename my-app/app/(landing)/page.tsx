import { Button } from "@/components/ui/button";
import ProductList from "@/entities/products/ui/ProductList";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "../config/routes";

export default function Home() {
  return (
    <main className=" bg-blue-50">
      <div className=" container py-4">
        <div className=" flex flex-col justify-center items-center gap-6 min-h-screen md:gap-24">
          <h1 className=" text-3xl md:text-5xl font-bold text-blue-700">YOUR AI</h1>
          <ProductList />
          <Link href={ROUTES.cabinet.dashboard}>
            <Button className=" flex gap-2 bg-blue-700 hover:bg-blue-400">
              START
              <ArrowRight/>
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
