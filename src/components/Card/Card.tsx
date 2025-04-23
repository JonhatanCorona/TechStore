import React from "react";
import { IProducts } from "../../interfaces/interfaces";
import Link from "next/link";
import AddToCart from "../Buttons/AddToCart";

interface CardProps {
  product: IProducts;
}

const Card = ({ product }: CardProps) => {

  return (
    <div className="flex flex-col h-96 rounded-lg overflow-hidden hover:shadow-md transition-all">
      <div className="aspect-square overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>

      {/* Contenido */}
      <div className="p-4 flex-grow">
        <h3 className="mb-2 title-200 text-center">{product.name}</h3>
        <p className="mb-2 title-200 text-center">Precio: ${product.price.toFixed(2)}</p>
      </div>

      {/* Botones */}
      <div className="p-3 pt-0 flex justify-around">
        <Link href={`/details/${product.id}`}>
          <button className="p-1 bg-secondary-200 text-100 text-primary-900 rounded-lg shadow-lg
            transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl active:translate-y-0.5">
            Details
          </button>
        </Link>
        <AddToCart product={product} />
      </div>
    </div>
  );
};

export default Card;
