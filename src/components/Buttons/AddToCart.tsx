"use client";

import { useAuth } from "@/Context";
import { IProducts } from "@/interfaces/interfaces";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

// Asegúrate de que el componente reciba un producto como prop.
interface AddToCartProps {
    product: IProducts;
}

const AddToCart = ({ product }: AddToCartProps) => {
    const router = useRouter();
    const { user } = useAuth();

    const handleAddToCart = () => {
    if (!user?.token) {
        Swal.fire({
        title: 'You must be logged in to add this product to the cart',
        text: 'Please log in or register to continue.',
        confirmButtonText: 'Sign In',
        cancelButtonText: 'Register',
        confirmButtonColor: '#45433a',
        cancelButtonColor: '#515561',
        showCancelButton: true,
    }).then((result) => {
        if (result.isConfirmed) {
                  // Redirige al usuario a la página de inicio de sesión
            router.push("/singIn");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
                  // Redirige al usuario a la página de registro
            router.push("/register");
            }
        });
    return;
}

    const cart: IProducts[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const alreadyInCart = cart.some((item) => item.id === product.id);

    if (alreadyInCart) {
        Swal.fire({
            title: 'Only 1 of each product per purchase',
            text: `You can only have one ${product.name} in the cart.`,
            confirmButtonText: 'OK',
            confirmButtonColor: '#45433a',
        });
        return;
    }

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    Swal.fire({
        title: `${product.name} added to cart`,
        text: 'The product has been successfully added to your cart.',
        confirmButtonText: 'OK',
        confirmButtonColor: '#515561',
    }).then(() => {
        router.push("/"); 
    });
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
