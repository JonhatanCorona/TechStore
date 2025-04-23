"use client"

import React, { useState } from 'react'

const Suscribe = () => {

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = () => {
    if (!email) {
      setError("The field cannot be empty");
    } else if (!validateEmail(email)) {
      setError("Invalid email");
    } else {
      setError('');
      alert(`Subscription completed successfully ${email}`);
      setEmail("");
    }
  };
  return (
<div className="flex flex-col bg-primary-800 py-6 lg:py-16 px-4 sm:px-6 mx-0 lg:mx-15 rounded-2xl shadow-2xl">
<div className="flex flex-col items-center">
        <h1 className='title-600 font-bold text-secondary-50 text-center'>Subscribe to Our Newsletter</h1>
        <h3 className='pb-4 text-200 text-secondary-50 text-center'>Get the latest news, exclusive offers, and updates delivered straight to your inbox.</h3>
    </div>
    <div className='flex flex-col md:flex-row items-center justify-center gap-4 '>
    <h3 className='pt-4 text-300 text-secondary-50'>Email</h3>
    <input className=" flex flex-col bg-secondary-50 p-3 rounded border border-secondary-50 w-full sm:w-96 md:w-128"
          type="email" 
          name="email" 
          placeholder="Subscribe..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        {error && (
          <p className="text-200 text-secondary-50 mt-2">{error}</p>
        )}
    <button onClick={handleSubmit}
    className='p-4 bg-secondary-200 text-300 text-primary-900 rounded-2xl shadow-lg
      transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl active:scale-95'>
        Subscribe
    </button>
    </div>
    </div>
  )
}

export default Suscribe;