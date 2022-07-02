import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlantIndex from "./component/plants/PlantIndex"
import Home from "./Home";
import Navigation from "./component/common/Navigation";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/plants" element={<PlantIndex />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;