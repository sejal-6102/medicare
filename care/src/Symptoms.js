import React, { useState } from 'react';
import logo from './images/logo.png';
import heart from './images/heart.png';
import MedecineDescription from './MedecineDescription'; // Import the new component

const symptomsList = [
  "Fatigue",
  "Weakened immune system",
  "Muscle weakness",
  "Poor night vision",
  "Brittle hair and nails",
  "Bone pain",
  "Dry skin",
  "Poor wound healing",
  "Irregular heartbeats",
  "Brain fog",
];

function Symptoms() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [selectedSymptom, setSelectedSymptom] = useState(null); // Track selected symptom
  const [submitted, setSubmitted] = useState(false); // Track if form is submitted

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSymptom && age && gender) {
      setSubmitted(true); // Mark the form as submitted
    } else {
      alert("Please fill out all fields and select a symptom!");
    }
  };

  // Function to reset the form after going back from the MedicationDescription component
  const handleGoBack = () => {
    setSubmitted(false); // Reset to go back to the form
  };

  // If the form is submitted, render the MedicationDescription component
  if (submitted) {
    return (
      <MedecineDescription 
        selectedSymptom={selectedSymptom} 
        age={age} 
        gender={gender} 
        onGoBack={handleGoBack} 
      />
    );
  }

  // Default form display
  return (
    <>
      <img src={logo} alt="logo" className="h-14 mt-2 ml-6" />
      <div className='container mx-auto'>
        <h1 className='text-3xl text-amber-900 font-sans font-bold text-center'>
          Manual Symptoms Entry
        </h1>

        <p className="mt-10 ml-40 mb-5 text-xl font-medium">Available Symptoms</p>

        {/* Symptoms Buttons */}
        <div className="container mx-auto w-5/6 justify-center items-center grid grid-cols-2 place-items-center md:grid-cols-5 gap-2 mb-6">
          {symptomsList.map((symptom, index) => (
            <button
              key={index}
              onClick={() => setSelectedSymptom(symptom)} // Set selected symptom
              className={`p-2 rounded-lg text-center h-24 w-56 border-2 
                ${selectedSymptom === symptom ? 'bg-green-500 border-green-700 text-white' : 'bg-white border-black'} 
                hover:bg-slate-200`}
            >
              <div className="text-red-600">
                <img src={heart} alt="heart" className="h-6 mx-auto" />
              </div>
              <span className='font-bold font-sans mt-2'>{symptom}</span>
            </button>
          ))}
        </div>

        {/* Form for Age and Gender */}
        <form onSubmit={handleSubmit} className="w-full md:w-3/4 mb-4 container ml-40">
          <label className="block mb-2 text-gray-700 font-bold">Enter your age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Enter your age"
          />

          <label className="block mb-2 text-gray-700 font-bold mt-4">Enter your gender</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <button
            type="submit"
            className='bg-black text-2xl text-white md:w-4/5 mt-10 p-2 rounded font-sans font-bold'
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Symptoms;
