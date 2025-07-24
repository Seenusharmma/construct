import React from "react";
import Testimonials from "../components/Testimonials";
import MainVideoSection from "../components/MainVideoSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AnimatedSwiper from "../components/AnimatedSwiper";
import LiveMap from "../components/LiveMap";

const Home = () => {
  return (
    <div className="bg-green-50">
      <MainVideoSection />
      <HeroSection />
      <Testimonials />
      <AnimatedSwiper/>
      <LiveMap/>
    </div>
  );
};

export default Home;
