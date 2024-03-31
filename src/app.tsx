import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Map from "./components/MapEmbed";
// App
const App = () => {
  const [hide, setHide] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
