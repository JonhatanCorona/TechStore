"use client"

import { useAuth } from '@/Context';
import { helperOrder } from '@/helpers/Helpers/helperCart';
import { IProducts } from '@/interfaces/interfaces';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const ShoppingCart = () => {
    const router = useRouter();
    const { user } = useAuth();
    const [cart, setCart] = useState<IProducts[]>([]);
    const [totalCart, setTotalCart] = useState<number>(0);

    useEffect(()=> { 
        const cartStore: IProducts[] = JSON.parse(localStorage.getItem("cart") || "[]");
        if (cartStore) {
            let totalCart = 0;
            cartStore.map((product : IProducts)=> 
            totalCart = totalCart + product.price)
            setTotalCart(totalCart)
            setCart(cartStore)
        }
    }, [])

    const handleRemoveFromCart = (productId: number) => {
        // Eliminar producto del carrito
        const updatedCart = cart.filter(product => product.id !== productId);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCart(updatedCart);

        // Actualizar el total
        const newTotal = updatedCart.reduce((total, product) => total + product.price, 0);
        setTotalCart(newTotal);
    }

    const handChekout = async () => {
        if (user?.token) {
            const idProduct = cart?.map((product) => product.id);

            await helperOrder(user.token, idProduct);

        localStorage.setItem("cart", "[]"); 
            setCart([]);
            setTotalCart(0);
            router.push("/myAccount/myOrders")
    }
};

return (
        <div className="w-full px-4 sm:px-6 lg:px-12 py-8 bg-secondary-50 rounded-none lg:rounded-xl">
            <h2 className="title-500 font-bold mb-6 text-primary-800 text-center lg:text-left">
            My Cart
            </h2>
    
        <div className="space-y-4">
        {cart.length > 0 ? (
            cart.map((product) => (
            <div key={product.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-secondary-100 p-4 rounded-lg shadow-sm">
                <div>
                <h3 className="text-300 font-semibold text-primary-800">{product.name}</h3>
                <p className="text-200 text-primary-700">${product.price.toFixed(2)}</p>
                </div>
            <button
                className="text-secondary-700 font-medium mt-2 sm:mt-0 hover:underline"
                onClick={() => handleRemoveFromCart(product.id)}>
                Remove
            </button>
            </div>
        ))
        ) : (
            <p className="text-primary-800">Your cart is empty.</p>
        )}
    </div>

    <div className="mt-6 border-t pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <span className="text-400 font-semibold text-primary-800">Total:</span>
        <span className="text-400 font-bold text-secondary-700">${totalCart.toFixed(2)}</span>
    </div>

    <button onClick={handChekout}
    className="mt-6 w-full bg-primary-800 hover:bg-gray-700 text-secondary-50 font-semibold py-2 px-4 rounded-lg transition duration-200">
        Proceed to Checkout
    </button>
    </div>
)
}

export default ShoppingCart;