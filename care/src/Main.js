import React, { useState } from "react";
import logo from "./images/logo.png";
import "./Css/Main.css";
import { useNavigate } from 'react-router-dom';
import Loading from "./Loading";

function Main() {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // State to manage loading

  // Function to handle navigation with loading screen
  const handleNavigateWithLoading = (path) => {
    setIsLoading(true); // Show loading screen
    setTimeout(() => {
      navigate(path); // Navigate to the selected page after a delay
    }, 3000); // 5 seconds delay for loading effect
  };

  return (
    <>
      {isLoading ? (
        // Show the loading screen while loading is true
        <Loading />
      ) : (
        <>
          <img src={logo} alt="logo" className="h-14 mt-2 ml-6" />

          {/* Outer container to center the content */}
          <div className="flex items-center justify-center mt-4">
            {/* Inner content div */}
            <div className="text-center">
              <h1 className="text-5xl font-bold font-sans text-gray-800">
                Hello {storedUser.username}
              </h1>
              <br />
              <div className="typewriter flex justify-center">
              <h1 className="text-2xl font-mono h-100">
                !! Welcome to Medicare !!
              </h1>
              </div>
              
              <div className="typewriter flex justify-center mt-12">
              <p className="text-2xl font-mono typewriter">
                Feeling under the weather? we've got your back !
              </p>
              </div>
              <div className="typewriter flex justify-center mt-12">
              <p className="text-2xl font-mono typewriter ">
                Tell us the symotoms and let your wearable spin the beans,<br />
                and we'll cook up a custom suppliment cocktail just for you !!
              </p>
              </div>
              <div className="typewriter flex justify-center mt-12">
              <p className="text-2xl font-mono typewriter ">
             Ready to boost your health ? Let's dive in !!
              </p>
              </div>
              </div>
            </div>
          
          <div className="flex justify-center items-center mt-12">
            <button
              className="bg-gray-800 text-white py-2 px-4 m-4 rounded hover:bg-gray-700"
              onClick={() => handleNavigateWithLoading('/Symptoms')}
            >
              Enter symptoms manually
            </button>
            <button
              className="bg-gray-800 text-white py-2 px-4 m-4 rounded hover:bg-gray-700"
              onClick={() => handleNavigateWithLoading('/Analyiz')}
            >
              Analyze your wearable data
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Main;
