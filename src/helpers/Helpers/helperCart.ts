import Swal from "sweetalert2";

export async function helperOrder(token: string, products: number[]) {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;

        const res = await fetch(`${baseUrl}/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
        body: JSON.stringify({
            products, 
        }),
    });

        if (!res.ok) {
        throw new Error(`Error del servidor: ${res.status}`);
}

        const data = await res.json();
            await Swal.fire({
                title: 'Purchase!',
                text: 'Purchase completed successfully.',
                confirmButtonColor: '#515561',
    });
        return data;
    } catch (error) {
        console.error("Error while making the purchase:", error);
        throw new Error("The purchase could not be completed.");
    }
}


export default async function helperGetOrder(token: string) {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;

        const res = await fetch(`${baseUrl}/users/orders`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        },
    });

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error while making the purchase:", error);
        throw new Error("The purchase could not be completed.");
    }
}