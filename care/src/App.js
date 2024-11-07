import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Import the Home component
import Register from './Register';
import Login from './Login';
import Main from './Main';
import Symptoms from './Symptoms';
import Analyiz from './Analyiz';

function App() {
  return (
    <Router> 
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/Symptoms" element={<Symptoms />} />
          <Route path="/Analyiz" element={<Analyiz />} />
        </Routes>
     
    </Router>
  );
}

export default App;
