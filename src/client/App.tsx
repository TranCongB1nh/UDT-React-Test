import React from "react"; 
import { Route, Routes } from "react-router-dom";
import HelloWorld from "./pages/HelloWorld";
import Calculator from "./pages/Calculator";
 

const App  = () => {
  return ( 
      <Routes>
        <Route path="/" element={<HelloWorld />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes> 
  );
};

export default App;
