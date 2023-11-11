import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Contact1 from './Components/Contact1';
import Footer from './Components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

function App() {
  return (
    <>
    <Navbar title="Portfolio"/>
    <Routes>
      <Route exact path="/" element={<Home/>} >
        </Route>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/contact1" element={<Contact1/>}></Route>
      </Routes>
      
      {/* <Footer/> */}
        
    </>
  );
}

export default App;
