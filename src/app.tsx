import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Home from "./Home";
import Banner from "./components/banner";
import Footer from "./components/footer";
import { OpJI } from "./components/ourproduct";
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
