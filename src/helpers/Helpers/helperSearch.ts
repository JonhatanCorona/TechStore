import { IProducts } from "@/interfaces/interfaces";
import helperProduct from "./helperProduct";

const helperSearch = async (helperSearch: string): Promise<IProducts[] | undefined> => {
    const response = await helperProduct();

    if (helperSearch.toLowerCase() === "others") {
        return response.filter(
            (product) => product.categoryId === 4 || product.categoryId === 6
        );
}
    
    let productFiltered = response.filter(
        (product) => product.categoryId.toString() === helperSearch
    );

    if (!productFiltered.length) {
        productFiltered = response.filter((product) =>
        product.name.toLowerCase().includes(helperSearch.toLowerCase())
    );
    }

    return productFiltered.length ? productFiltered : undefined;
};

export default helperSearch;