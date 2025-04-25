"use client"
import { IProducts } from '@/interfaces/interfaces';
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';


interface CartContextType {
    cart: IProducts[];
    setCart: React.Dispatch<React.SetStateAction<IProducts[]>>; // Permite actualizar el carrito desde el contexto
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<IProducts[]>([]);

    // Cargar carrito desde localStorage (si existe)
    useEffect(() => {
        const cartStore: IProducts[] = JSON.parse(localStorage.getItem('cart') || '[]');
        if (cartStore) {
            setCart(cartStore);
        }
    }, []);

    // Actualizar localStorage cuando cart cambia
    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};
