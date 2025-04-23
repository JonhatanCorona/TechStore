import React from "react";
import { IProducts } from "@/interfaces/interfaces";
import helperDetail from "@/helpers/Helpers/helperDetail";
import DetailsProduct from "@/components/Details/Details";
import { notFound } from "next/navigation";

const Details = async ({ params }: { params: Promise<{ detailsID: number }> }) => {

  const { detailsID } = await params;


  const product: IProducts | undefined = await helperDetail(detailsID.toString());

  if (!product) {
    notFound(); // Si el producto es undefined, renderiza la página 404
  }

  
  return ( 

    
      <>
    <DetailsProduct product={product} />
  </>
  )
};

export default Details;
