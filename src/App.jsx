import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/HeroSection/HeroSection";
import CaseStudies from "./Components/CaseStudies/CaseStudies";
import './App.css'

function App() {

  return (
    <React.Fragment>
        <Navbar />
        <HeroSection />
        <CaseStudies />
        </React.Fragment>
  )
}

export default App
