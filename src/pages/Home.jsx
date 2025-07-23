import React from "react";
import Testimonials from "../components/Testimonials";
import MainVideoSection from "../components/MainVideoSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="">
      <MainVideoSection />
      <HeroSection />
      <Testimonials />
    </div>
  );
};

export default Home;
