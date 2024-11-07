import React from "react";
import { useNavigate } from 'react-router-dom';
import logo from './images/logo.png';
import HealthCare from './images/HEALTH CARE.png';

export default function Home() {
    const navigate = useNavigate(); // Hook for navigation

    return (
        <>
            <nav className="bg- shadow-md py-2">
                <div className="container mx-auto flex items-center justify-between px-4">
                    {/* Left Side: Logo */}
                    <img src={logo} alt="logo" className="h-14"/>

                    {/* Right Side: Login and Register buttons */}
                    <div>
                        <button 
                          className="bg-red-500 text-white px-4 py-2 w-40 text-xl rounded-md hover:bg-neutral-700 mr-3"
                          onClick={() => navigate('/login')} // Navigate to Login
                        >
                          Login
                        </button>
                        <button 
                          className="bg-red-500 text-white px-4 py-2 w-40 text-xl  rounded-md hover:bg-neutral-700 mr-3"
                          onClick={() => navigate('/register')} // Navigate to Register
                        >
                          Register
                        </button>
                    </div>
                </div> 
            </nav>
            <div className="flex flex-col items-center justify-center text-center">
                <img src={HealthCare} alt="health" className="mb-1"/>
                <button 
                  className="bg-red-500 transition ease-in-out delay-100 text-white px-4 py-2 w-40 text-xl mb-4 rounded-md hover:bg-neutral-700 hover:-translate-y-1 mr-3"
                  onClick={() => navigate('/register')} // Navigate to Register when Get Started is clicked
                >
                  Get Started
                </button>
                <h1 className="text-6xl font-bold text-gray-900 mb-2 font-sans">MEDICARE</h1>
                <p className="text-lg text-gray-600 italic text-3xl ">Sync Your Health, Supplement Your Life</p>
            </div>
        </>
    );
}
