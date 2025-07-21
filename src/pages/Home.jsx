import React from "react";
// import bg from '../assets/bg.mp4'

const Home = () => {
  return (
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
  );
};

export default Home;
