"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useAuth } from '@/Context';
import Cookies from 'js-cookie';



const Navbar = () => {
  const router = useRouter()
  const pathname = usePathname();
  const [search, setSearch] = useState<string>("");
  const { user, setUser } = useAuth(); 

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (search.trim().length) {
      router.push(`/products/${search.trim()}`);
    } else {
      alert("Nothing to search");
    }
    setSearch("");
  };


  const handleLogout = () => {
    localStorage.removeItem('loginUser');
    localStorage.removeItem('cart');
    Cookies.remove("loginUser"); // Eliminar el usuario de localStorage y cookies
    setUser(null); // Actualizar el estado de usuario en el contexto
      window.location.href = '/';
};

  const showHomeLink =
  pathname === "/singIn" ||
  pathname === "/register" ||
  pathname === "/shoppingCart" ||
  pathname === "/myAccount/myOrders" ||
  pathname === "/myAccount/myProfile" ||
  /^\/details\/\d+$/.test(pathname);

  return (
    <>
      <div className='flex flex-col' >
      <nav>
  <ul className="flex md:flex-row md:justify-end ml-auto w-fit pt-3 pb-2 px-8 bg-secondary-700 
  text-primary-50 rounded-t-lg rounded-b-lg lg:gap-24 gap-4 font-semibold">
    {!user && (pathname === "/" || pathname === "/singIn" || pathname.startsWith("/products")) && (
        <li>
          <Link href="/register">Register</Link>
        </li>
      )}

    {!user && (pathname === "/" || pathname === "/register"  ||  pathname.startsWith("/products")) && (
        <li>
          <Link href="/singIn">Sign In</Link>
        </li>
      )}

      {showHomeLink && (
        <li>
          <Link href="/">Home</Link>
        </li>
      )}


    {user && (pathname === "/"  || pathname.startsWith("/products")) && (
      <li>
  <select
    className="bg-secondary-700 text-white px-2 py-1 rounded"
    defaultValue=""
    onChange={(e) => {
      if (e.target.value) router.push(e.target.value);
    }}
  >
    <option value="" disabled hidden>
      My Account
    </option>
    <option value="/myAccount/myProfile">My Profile</option>
    <option value="/myAccount/myOrders">My Orders</option>
  </select>
</li>
    )}

    {user && (pathname === "/" || pathname.startsWith("/products")) && (
      <li>
    <Link href="/shoppingCart">
            {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/cart.webp" alt="Carrito de compras" width={25} height={25} 
      className="bg-primary-50 rounded-2xl mb-1 " />
    </Link>
  </li>
    )}

    {user && (pathname === "/myAccount/myOrders") && (
      <li>
        <Link href="/myAccount/myProfile">My Profile</Link>
      </li>
    )}

    {user && (pathname === "/myAccount/myProfile") && (
      <li>
        <Link href="/myAccount/myOrders">My Orders</Link>
      </li>
    )}

    {user && (pathname === "/myAccount/myOrders" || pathname === "/myAccount/myProfile" || pathname === "/"
      || /^\/products\/\d+$/.test(pathname)) && (
      <li>
      <button onClick={handleLogout}>Sing Out</button>
      </li>
    )}
  </ul>
</nav>

      </div>
      <div className="flex flex-col md:flex-row gap-8 bg-primary-800 text-secondary-50">
      <div className="flex justify-center md:justify-start w-full md:w-auto px-4 md:px-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
  <img src="/Logo.png" alt="Logo" className="w-20 h-20 lg:ml-4 mt-2 md:w-24 md:h-24" />
  <h1 className="pt-10 title-500 font-bold">TechStore</h1>
      </div>

      {pathname === "/myAccount/myOrders" ||pathname === "/myAccount/myProfile" ||pathname === "/singIn" ||pathname === "/register" 
      ||pathname === "/shoppingCart" || /^\/details\/\d+$/.test(pathname) ?  
      <li className="flex flex-1 items-center justify-center md:justify-center w-full md:w-auto mt-4 md:mt-0">
  <span className="text-lg font-semibold text-white">Innovation that transforms, technology that connects</span></li> 

:(<div className="flex flex-col items-center md:items-start p-4 md:p-4 w-full mx-auto max-w-screen-lg">
          <form onSubmit={handleSearch}
            className="flex w-full max-w-[900px] gap-4 mb-4 md:pl-32 px-4">
            <input value={search} onChange={(e) => setSearch(e.target.value) }
            className="bg-secondary-50 text-primary-900 flex-grow p-1 rounded border border-secundary-50
            focus:outline-none focus:ring-2 focus:ring-secondary-700 "
            type="text" 
            name="search" 
            placeholder="Search by name..."/>
            <button type='submit'
            className='p-1 bg-secondary-200 text-300 text-primary-900 rounded-lg shadow-lg
            transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95'>
              Search
            </button>
          </form>
          <div className="w-full">
            <nav>
            <ul className="flex lg:justify-between g-2 w-full lg:max-w-[900px] mx-auto px-4">
                <li>
                  <Link href="/">All</Link>
                </li>
                <li>
                  <Link href="/products/1">Smartphones</Link>
                </li>
                <li>
                  <Link href="/products/2">Laptops</Link>
                </li>
                <li>
                  <Link href="/products/3">Tablets</Link>
                </li>
                <li>
                  <Link href="/products/5">Headphones</Link>
                </li>
                <li>
                  <Link href="/products/others">Others</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        )}
      </div>
    </>
  );
};


export default Navbar;


