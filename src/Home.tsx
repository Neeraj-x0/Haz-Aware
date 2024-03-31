import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
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
import Footer from "./components/footer";
import { OpJI } from "./components/ourproduct";

// App
const Home = () => {
  const [hide, setHide] = useState(true);

  return (
    <>
      
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar hide={hide} />
          <Hero />
        </div>

        <div>
          
          
          <Experience />
        </div>
        {/* Contact <Works
         <About />
        <Experience />
        <Tech 
         <StarsCanvas />/>
        
        <Feedbacks /> />*/}
        <div className="relative z-0">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
