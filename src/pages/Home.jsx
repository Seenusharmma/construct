import React from "react";
import Testimonials from "../components/Testimonials";
import MainVideoSection from "../components/MainVideoSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AnimatedSwiper from "../components/AnimatedSwiper";
import LiveMap from "../components/LiveMap";
import StatsSection from "../components/StatsSection";
import SplashCursor from "../components/SplashCursor";

const Home = () => {
  return (
    <div className="bg-green-50">
      <SplashCursor/>
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
