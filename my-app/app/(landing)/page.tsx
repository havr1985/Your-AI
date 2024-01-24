import { Button } from "@/components/ui/button";
import ProductList from "@/entities/products/ui/ProductList";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className=" container py-4">
        <div className=" flex flex-col justify-center items-center gap-6 min-h-screen">
          <h1 className=" text-3xl md:text-5xl font-bold">YOUR AI</h1>
          <ProductList />
          <Link href='/cabinet/dashboard'>
            <Button className=" flex gap-2">
              START
              <ArrowRight/>
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
