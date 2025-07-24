import React from 'react'
import ToggleSections from './ToggleSections'
import ToggleSection from './ToggleSections'

const HeroSection = () => {
  return (
    <div>
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
            <ToggleSection/>
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
    </div>
  )
}

export default HeroSection
