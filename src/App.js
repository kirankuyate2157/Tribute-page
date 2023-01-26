import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Biography from "./components/Biography";
// import Songs from "./components/Songs";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/b" element={<Biography />} />
      </Routes>
    </>
  );
}

export default App;
