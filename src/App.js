import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Songs from "./components/Songs";
// import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Songs />} />
      </Routes>
    </>
  );
}

export default App;
