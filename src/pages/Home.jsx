import React from "react";
import Testimonials from "../components/Testimonials";
import MainVideoSection from "../components/MainVideoSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AnimatedSwiper from "../components/AnimatedSwiper";
import LiveMap from "../components/LiveMap";
import StatsSection from "../components/StatsSection";
const Home = () => {
  return (
    <div className="bg-green-50">
      <MainVideoSection />
      <HeroSection />
      <StatsSection/>
      <Testimonials />
      
      <AnimatedSwiper/>
      <LiveMap/>
    </div>
  );
};

export default Home;
