import React from "react";
import './Css/Main.css';

function Loading(){
    return(
        <>
        <div className="flex items-center justify-center mt-48">
      <div className="spinner-border animate-spin w-16 h-16 border-8 border-red-500 border-t-amber-950 border-b-amber-950 rounded-full"></div>
     
    </div>
    <div  className="text-center">
     <h1 className="text-4xl text-gray-900 font-sans mt-9 font-extrabold">We Will Help You Get Connected</h1>
     <p className ="font-italic text-gray-900 font-medium text-2xl">Hang tight while we convence the server to stop taking a coffe break!</p>
     </div>
     </>
    )
}
export default Loading;