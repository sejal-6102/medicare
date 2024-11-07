import React from 'react';
import logo from './images/logo.png';
import sleep_chart from'./images/sleep_chart.png'
import Nutri from'./images/Nutri.png'
import run from'./images/run.png'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
  return (
    <>
    <img src={logo} alt="logo" className="h-14 mt-2 ml-6" />
    <h1 className='text-4xl text-orange-700 capitalize text-center font-bold font-serif'> {storedUser.username} Health Analysize Report</h1>
    <div className="bg-orange-100 min-h-screen p-10 flex flex-col items-center">
      
      {/* Top Section with Charts and Statistics */}
      <div className="grid grid-cols-3 gap-4 mb-10 w-full max-w-6xl">
        {/* Left Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md w-auto">
          <h2 className="text-lg font-semibold">Sleep Duration</h2>
          <img src={sleep_chart} alt="Sleep Chart" className=" h-52 w-96 mt-4" />
        </div>
        
        {/* Center Stats */}
        <div className="flex flex-col items-center justify-around bg-white p-4 rounded-lg shadow-md text-center">
          <div>
            <h2 className="text-2xl font-bold">111.56</h2>
            <p>Total Distance Covered</p>
          </div>
          <img src={run} alt="run"></img>
          <div className="mt-4">
            <h2 className="text-2xl font-bold">8.06K</h2>
            <p>Average Daily Step Count</p>
          </div>
        </div>
        
        {/* Right Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">Nutrition Intake</h2>
          <img src={Nutri} alt="Nutrition Chart" className="h-52 w-96 mt-4" />
        </div>
      </div>
      
      {/* Sleep and Nutrition Cards */}
      <div className="flex space-x-8 mb-10 w-full max-w-4xl">
        {/* Sleep Card */}
        <div className="bg-white p-6 rounded-lg shadow-md flex-1 text-center">
          <h3 className="text-lg font-bold">Sleep</h3>
          <p>Average sleep duration: 9.46 hours</p>
          <p>Recommended: 9-10 hours for children aged 6-13</p>
          <p className="text-green-600 font-semibold">Status: Within recommended range</p>
        </div>
        
        {/* Nutrition Card */}
        <div className="bg-white p-6 rounded-lg shadow-md flex-1 text-center">
          <h3 className="text-lg font-bold">Nutrition</h3>
          <p>Average Vitamin C intake: 38.74 mg</p>
          <p>Recommended: 45 mg/day for children aged 6-8</p>
          <p className="text-red-600 font-semibold">Status: Below recommended</p>
        </div>
      </div>
      
      {/* Recommendations Section */}
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl">
        <h3 className="text-lg font-bold mb-4">Recommendations</h3>
        <ul className="list-disc ml-5 text-gray-700 space-y-2">
          <li><strong>Sleep:</strong> Maintain current sleep schedule.</li>
          <li><strong>Physical Activity:</strong> Increase daily activity to reach 10,000 steps and 60 active minutes.</li>
          <li><strong>Nutrition:</strong> Increase Vitamin C intake through diet or supplements.</li>
          <li><strong>Hydration:</strong> Ensure adequate water intake throughout the day.</li>
          <li><strong>Wound Healing:</strong> Monitor wound healing progress and maintain good nutrition and sleep habits to support healing.</li>
        </ul>
      </div>
    </div>
    <button
        onClick={() => navigate(-1)}
        className="bg-white hover:bg-red-300 text-gray-800 font-semibold py-2 px-2 rounded border border-gray-950 ml-10"
      >
        Go Back
      </button>
    </>
  );
};

export default Dashboard;
