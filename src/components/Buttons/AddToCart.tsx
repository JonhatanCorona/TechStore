"use client";

import { useAuth } from "@/Context";
import { IProducts } from "@/interfaces/interfaces";
import { useRouter } from "next/navigation";

// Asegúrate de que el componente reciba un producto como prop.
interface AddToCartProps {
    product: IProducts;
}

const AddToCart = ({ product }: AddToCartProps) => {
    const router = useRouter();
    const { user } = useAuth();

const handleAddToCart = () => {
    if (!user?.token) {
        alert("Log in to add products to the cart.");
        router.push("/singIn");
        return;
    }

    const cart: IProducts[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const alreadyInCart = cart.some((item) => item.id === product.id);

    if (alreadyInCart) {
        alert("This product is already in the cart.");
        return;
    }

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to the cart");
    router.push("/"); 
};

return (
    <button
        onClick={handleAddToCart}
        className="p-1 bg-primary-800 text-100 text-secondary-50 rounded-lg shadow-lg
        transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl active:translate-y-0.5"
    >
        Add to cart 🛒
    </button>
);
};

export default AddToCart;
