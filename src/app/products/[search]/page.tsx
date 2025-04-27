import Card from "@/serverComponents/Card/Card";
import helperSearch from "@/helpers/Helpers/helperSearch";
import { IProducts } from "@/interfaces/interfaces";
import React from "react";




const Products = async  ({ params }: { params : Promise<{ search : string }> }) => {
    const { search } = await params;
    const products: IProducts[] | undefined = await helperSearch(search);

    if (!products) {
        return <div className="title-400 text primar-800 text center font-bold"> Product not found </div>
}

    return (

        <div>
    <div className="cursor-pointer my-4 md:my-5 lg:my-6 mx-0 lg:mx-15 flex flex-col h-40 items-center
    justify-center rounded-xl bg-secondary-800">
    <span className="text-400 font-semibold text-center text-primary-50 animate-pulse">
    Innovation that transforms, technology that connects
    </span>
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