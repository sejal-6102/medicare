import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heart from './images/heart.png';

function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (email && username && password) {
      // Store data in localStorage
      localStorage.setItem('user', JSON.stringify({ email, username, password }));
      alert('Registration successful! You can now log in.');
      navigate('/login');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <div className="w-full bg-white shadow-md rounded max-w-xs m-auto mt-28 pt-4">
           <img src={heart} alt="heart" className="h-10 m-auto" />
      <h2 className="text-center text-2xl font-bold mb-4">Create Account</h2>
      <div className=" px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Register;
