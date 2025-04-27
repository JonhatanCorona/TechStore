"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";  // Asegúrate de importar Footer desde su archivo correcto

interface ShowComponentProps {
    children: ReactNode;
}

const ShowComponent: React.FC<ShowComponentProps> = ({ children }) => {
    const pathname = usePathname();

    // Verificación de rutas válidas
    const validRoutes = [
        "/",  // Home
        "/singIn",  // Sign-in page
        "/register", // Register page
        "/shoppingCart", // Shopping cart
        "/myAccount/myProfile",  // My Profile page
        "/myAccount/myOrders",  // My Orders page
    ];

    // Verificación de rutas dinámicas
    const isProductPage = pathname?.startsWith("/products");
    const isProductDetail = pathname?.startsWith("/details/") && /\d+$/.test(pathname);

    // Determina si se deben mostrar el Navbar y el Footer
    const showComponents = validRoutes.includes(pathname || "") || isProductDetail || isProductPage;

    return (
        <>
        <header>{showComponents && <Navbar />}</header>
            <main className="flex-grow flex justify-center items-center"> {children}</main>
            {showComponents && <Footer />}
        </>
    );
};

export default ShowComponent;
