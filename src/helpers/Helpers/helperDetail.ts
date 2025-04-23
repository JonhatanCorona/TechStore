import { IProducts } from "@/interfaces/interfaces";
import helperProduct from "./helperProduct";


const helperDetail = async (id: string): Promise<IProducts | undefined> => {
    const response = await helperProduct();
    const productFiltered = response.find((product) => product.id.toString() === id);

    return productFiltered; 
};

export default helperDetail;

