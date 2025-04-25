
import React from "react";
import Card from "../Card/Card"; 
import Suscribe from "../Suscribe/Suscribe"
import helperProduct from "@/helpers/Helpers/helperProduct";



const Product = async () => {
  const products = await helperProduct();

  return (
    <div className="container mx-auto">
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-4/5 mx-auto ">
      {products.map((product, index) => (
        <React.Fragment key={product.id}>
          <li className="min-h-[200px]">
            <Card product={product} />
          </li>
  
          {/* Insertar Suscribe cada 12 productos */}
          {(index + 1) % 16 === 0 && (
            <li className="col-span-full flex justify-center">
              <div className="w-full">
                <Suscribe />
              </div>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
    {products.length > 0 && products.length % 16 !== 0 && (
      <div className="w-full flex justify-center mt-6">
        <Suscribe />
      </div>
    )}
  </div>
  );
};

export default Product;
