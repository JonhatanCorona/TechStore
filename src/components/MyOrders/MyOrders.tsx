
"use client"

import { useAuth } from '@/Context';
import helperGetOrder from '@/helpers/Helpers/helperCart';
import { IProducts } from '@/interfaces/interfaces';
import React, { useEffect, useState } from 'react'


interface IOrder {
  id: number;
  status: string;
  date: string;
  products: IProducts[]
}

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [openOrderId, setOpenOrderId] = useState<number | null>(null);

  const handleGetOrder = async () => {
    try {
      if (user?.token) {
        const response = await helperGetOrder(user.token);
        setOrders(response);
      }
    } catch (error) {
      console.error("Error al obtener las órdenes:", error);
    }
  };

  const calculateTotal = (products: IProducts[]): number => {
    return products.reduce((acc, product) => acc + Number(product.price), 0);
  };

  const toggleOrder = (id: number) => {
    setOpenOrderId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    handleGetOrder();
    
  },[user?.token]);

  return (
  <> 
    <div className='title-500 font-bold text-primary-800 text-center mb-2'> My Orders </div>
    <div className="w-full flex flex-col px-2 lg:px-6 py-8 bg-secondary-50 rounded-none lg:rounded-x">
      {orders.length === 0 && (
        <p className="w-full text-center text-secondary-600 text-lg font-medium">
      No orders have been placed yet.
        </p>
  )}
      {orders.map((order) => (
        <div
          key={order.id}
          onClick={() => toggleOrder(order.id)}
          className="flex flex-col bg-secondary-700 rounded-lg p-4 shadow-lg mb-4 items-center w-full sm:w-[350px] lg:w-[950px]"
        >
          <div  className="flex flex-row items-center gap-4 lg:gap-64 space-y-2 mx-16">
          <p className="text-300 font-semibold text-primary-50 text-center">
          Order  <br /> #{order.id}
          </p>
          <p className="text-200 text-primary-100 text-center">
            Date  <br />
            {new Date(order.date).toLocaleDateString("es-AR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </p>
          <span
            className={`inline-block text-200 text-primary-50 px-2 py-1 mt-1 rounded-full ${
              order.status === "approved"
                ? "bg-primary-200 text-secondary-800"
                : "bg-secondary-200 *:text-primary-800"
            }`}
          > 
            {order.status}
          </span>
          </div>

          {openOrderId === order.id && (
  <div className="mt-4 space-y-2 lg:mr-16 w-full lg:w-[550px]">
    <h1 className="title-200 font-semibold text-primary-100 text-center mb-2">Purchased Products</h1>
    {order.products?.map((product) => (
      <div
        key={product.id}
        className="p-2 bg-primary-200 rounded-md flex flex-row justify-between"
      >
        <p className="text-secondary-800 font-medium text-center">{product.name}</p>
        <p className="text-secondary-800 font-medium text-center">${product.price}</p>
      </div>
    ))}

    <div className="mt-4 bg-primary-100 p-2 rounded-md">
      <p className="text-secondary-900 font-bold text-center">
        Total: ${calculateTotal(order.products).toFixed(2)}
      </p>
    </div>
  </div>
)}

        </div>
      ))}
    </div>
    </>
  );
  
}

export default MyOrders