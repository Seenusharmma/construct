import React from "react";
import { motion } from "framer-motion";
import bgConstruction from "../assets/bgConstruction.webp";

const Home = () => {
  return (
    <div className="">
      <div className="relative w-full h-screen overflow-hidden">
        {/* Video element */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/bg.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Content overlay */}
        <div className="relative z-10 flex items-center justify-center h-full bg-black/40 text-white text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome To M/S Karan Enterprises
            </h1>
            <p className="text-lg md:text-2xl">
              Serving Infrastructure for a Better Tomorrow
            </p>
          </div>
        </div>
      </div>
      <section className="bg-[#eaf1ed] px-6 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
              Our <br /> for <span className="text-indigo-800">Company.</span>
            </h2>
            <p className="text-gray-600 text-lg">
              M/S Karan Enterprises was established in the year 2013 and is a
              leading contractor firm specializing in railway & roadway
              infrastructure projects in Jharkhand.
            </p>
            <button className="bg-indigo-800 text-white px-6 py-3 rounded-md shadow hover:bg-indigo-700 transition">
              Contact US
            </button>
          </div>

          {/* Image Section */}
          <div className="flex gap-4">
            <img
              src="https://img.freepik.com/premium-photo/cranes-dot-construction-site-contributing-building-process-vertical-mobile-wallpaper_896558-11336.jpg"
              alt="Interior 1"
              className="w-1/2 rounded-xl object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110"
            />
            <img
              src="https://ctf.wa.gov.au/_next/image?url=https%3A%2F%2Fapi.ctf.wa.gov.au%2Fwp-content%2Fuploads%2F2024%2F11%2FJoannahs_colouredit-e1744609130684.jpg&w=3840&q=75"
              alt="Interior 2"
              className="w-1/2 rounded-xl object-cover max-w-xs transition duration-300 ease-in-out hover:scale-110"
            />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"></div>
      </section>

      {/* background images */}
    </div>
  );
};

export default Home;
