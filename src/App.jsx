import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import HomePage from "./Components/Homepage";
import './App.css'
import { Routes, Route } from 'react-router-dom';

function App() {
 return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
       <Route path="/reactai" element={<HomePage/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
 );
}

export default App;
