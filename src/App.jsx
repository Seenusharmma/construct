import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ClickSpark from "./components/ClickSpark";

const App = () => {
  return (
    <BrowserRouter>
      <ClickSpark
        sparkColor="#000080"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {/* Our content here */}

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Gallery" element={<Gallery />}></Route>
          <Route path="/Services" element={<Services />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </ClickSpark>
    </BrowserRouter>
  );
};

export default App;
