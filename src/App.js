import React from "react";
import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="text-center mt-5">
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}
export default App;
