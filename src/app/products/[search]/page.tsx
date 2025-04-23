import Card from "@/components/Card/Card";
import helperSearch from "@/helpers/Helpers/helperSearch";
import { IProducts } from "@/interfaces/interfaces";
import { notFound } from "next/navigation";
import React from "react";


interface ProductsProps {
    params: { search: string };
}

const Products = async ({ params }: ProductsProps) => {
    const { search } = await params;
    const products: IProducts[] | undefined = await helperSearch(search);

    if (!products) {
    notFound(); 
}

    return (

        <div>
        <div className="cursor-pointer my-6 mx-15 flex flex-col h-40 items-center justify-center rounded-xl bg-secondary-800">
        <span className="text-lg font-semibold text-white">Innovation that transforms, technology that connects</span>
        </div>

    <div className="container mx-auto">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-4/5 mx-auto">
        {products.map((product) => (
            <li key={product.id} className="min-h-[200px]">
            <Card product={product} />
            </li>
        ))}
        </ul>
    </div>

</div>
);
};

export default Products;