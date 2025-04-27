import React from "react";
import { IProducts } from "@/interfaces/interfaces";
import helperDetail from "@/helpers/Helpers/helperDetail";
import DetailsProduct from "@/serverComponents/Details/Details";

const Details = async ({ params }: { params: Promise<{ detailsID: number }> }) => {

  const { detailsID } = await params;


  const product: IProducts | undefined = await helperDetail(detailsID.toString());

  if (!product) {
    return <div className="title-400 text primar-800 text center font-bold"> Product not found </div>
  }

  
  return ( 

    
      <>
    <DetailsProduct product={product} />
  </>
  )
};

export default Details;
