"use client";

import { motion } from 'framer-motion';
import { useAuth } from '@/Context/index';
import React from 'react';

const Profile: React.FC = () => {
const { user } = useAuth();

if (!user) {
    return (
    <div className="flex items-center justify-center bg-secondary-50 font-bold text-primary-800">
        <div className="title-300 animate-pulse">Loadding...</div>
    </div>
    );
}

return (
    <div className="w-full  bg-secondary-700 p-16 rounded-lg overflow-hidden hover:shadow-md transition-all">
        <motion.div
    className="max-w-6xl w-full px-10 py-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2, ease: 'easeOut' }}
>
        <h1 className="text-center text-primary-50 text-500 font-bold mb-16">My Profile</h1>

        <div className="flex flex-col lg:flex-row justify-center items-start gap-x-48">
          {/* Avatar + Nombre */}
            <div className="flex flex-col items-center w-full lg:w-1/2 gap-6">
            <div className="h-36 w-36 md:h-40 md:w-40 rounded-full bg-primary-200 overflow-hidden shadow-xl">
                
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                src="/Avatar.png"
                alt="Profile"
                className="h-full w-full object-cover transition-transform hover:scale-105"
            />
            </div>
            <h1 className="title-00 font-bold text-primary-50 text-center">
                Client <br /> {user.user.name}
            </h1>
        </div>

          {/* Datos */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 mt-10 lg:mt-0 px-6 gap-10 ">
            <h2 className="text-center title-300 text-primary-50">
                Email <br /> {user.user.email}
            </h2>
            <h2 className="text-center title-300 text-primary-50">
                Address <br /> {user.user.address}
            </h2>
            <h2 className="text-center title-300 text-primary-50">
                Phone <br /> {user.user.phone}
            </h2>
        </div>
        </div>
    </motion.div>
    </div>
);
};

export default Profile;
