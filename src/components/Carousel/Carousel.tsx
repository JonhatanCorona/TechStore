"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react'

interface IPromotion {
    message: string;
    message2: string;
    bgColor: string
}


const promotions: IPromotion[] = [
    {
        message: "Premium Headphones",
        message2: "Immerse yourself in high-quality sound with our premium headphones",
        bgColor: "bg-primary-700",
    },
    {
        message: "New Smartphones 2025",
        message2: "Discover the latest technology with our new smartphone collection",
        bgColor: "bg-secondary-700",
    },
    {
        message: "Ultralight Laptops",
        message2: "Power and portability in one device. Perfect for work and study",
        bgColor: "bg-neutral-800",
    },
];


const Carousel = () => {
    const [index, setIndex] = useState<number>(0);

    // Cambiar la promoción automáticamente cada 5 segundos
    useEffect(() => {
    const intervalId = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % promotions.length);
      }, 5000); // 5000 ms = 5 segundos

      // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
    }, []);

    // Función para cambiar a la siguiente promoción cuando el usuario haga clic
    const handleNext = (): void => {
    setIndex((prev) => (prev + 1) % promotions.length);
    };

    return (
        <>
        <div
        onClick={handleNext}
        className={`cursor-pointer mb-7 lg:mx-15 flex flex-col h-80 items-center justify-center rounded-xl transition-all duration-500 ${promotions[index].bgColor} space-y-2`}
>
            <h2 className='text-primary-50 title-600 font-bold text-center'>{promotions[index].message}</h2>
            <p className='text-primary-50 text-300 text-center'>{promotions[index].message2}</p>
    <Link href="/singIn">
    <button className="explore-button no-underline py-2 px-4 mt-4 bg-primary-100 text-200 text-secondary-800 rounded-lg shadow-lg
    transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl active:translate-y-0.5 font-semibold">
        Explore
    </button>
    </Link>
</div>

    </>
    );
}

export default Carousel;