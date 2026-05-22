import React from "react";
// import Data from "./components/Data";
import {Home} from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Project from "./components/Project"; // FIXED: Kept as Project
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
   <>
   <div className="bg-gray-900">
    <Home/>
   <About/>
   <Education/>
   <Skills/>
   <Project/>
   <Contact/>
   <Navbar/>
   <Footer/>
   </div>
   </>
  );
}

export default App;