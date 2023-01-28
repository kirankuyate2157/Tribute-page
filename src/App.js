import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/n" element={<Navbar />} />
      </Routes>
    </>
  );
}

export default App;
