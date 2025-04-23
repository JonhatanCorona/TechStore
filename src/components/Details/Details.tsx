import React from 'react';
import { IProducts } from '@/interfaces/interfaces';
import AddToCart from '../Buttons/AddToCart';

const DetailsProduct = ({ product }: { product: IProducts }) => {
  return (
<>
  <div className="flex flex-col bg-secondary-50 w-full max-w-screen-xl mx-auto overflow-x-hidden">
    <div className="w-full flex justify-center my-8 px-4">
      <h1 className="text-center title-600 text-primary-800 font-bold">{product.name}</h1>
    </div>

    <div className="flex flex-col lg:flex-row w-full px-4">
      <div className="w-full lg:w-1/2 min-h-[45vh] flex justify-center items-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-[400px] h-auto object-contain rounded-lg shadow-2xl transition-transform hover:scale-105"
        />
      </div>

      <div className="w-full lg:w-1/2 p-4">
        <div>
          <p className="text-center title-400 text-secondary-800 my-6">
            <strong>Description</strong><br /> {product.description}
          </p>
        </div>
        <div className="flex flex-row justify-around">
          <p className="text-center title-300 text-secondary-800 my-2">
            <strong>Stock</strong><br /> {product.stock}
          </p>
          <p className="text-center title-300 text-secondary-800 my-2">
            <strong>Price</strong><br /> ${product.price}
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  </div>
</>
  
  );
};

export default DetailsProduct;