import { IProducts } from "@/interfaces/interfaces";

const helperProduct = async (): Promise<IProducts[]> => {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        await new Promise(resolve => setTimeout(resolve, 3000));
        const res = await fetch(`${baseUrl}/products`, {
        next: { revalidate: 60 }, 
    });

        if (!res.ok) {
        throw new Error(`Error del servidor: ${res.status}`);
    }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        throw new Error("No se pudieron cargar los productos.");
}
};

export default helperProduct;


