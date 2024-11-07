import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heart from './images/heart.png';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.username === username && storedUser.password === password) {
      // Redirect to the main page upon successful login
      navigate('/main'); // You should have a route for "/main" defined in your routing config
    } else {
      alert('Invalid credentials.');
    }
  };

  return (
    <div className="w-full bg-white shadow-md rounded m-auto max-w-xs mt-28 pt-4">
      <img src={heart} alt="heart" className="h-10 m-auto" />
      <h2 className="text-center text-3xl font-bold mb-4">Login</h2>
      <div className="px-8 pt-6 pb-8 mb-4">
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
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
      <p className="text-center">
        Don't have an account?{' '}
        <span
          className="text-red-500 hover:text-red-700 cursor-pointer"
          onClick={() => navigate('/register')}
        >
          Create an account
        </span>
      </p>
    </div>
  );
}

export default Login;
