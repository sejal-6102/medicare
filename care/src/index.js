import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // Import the App component which contains the routing logic
import reportWebVitals from './reportWebVitals';

// Create the root for the app and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Render App which handles navigation between Home, Login, and Register */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
