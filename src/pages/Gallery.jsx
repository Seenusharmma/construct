import React from 'react'


const Gallery = () => {
  return (
   <section className="bg-[#eaf1ed] px-6 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Text Section */}
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
            Crafting Space <br /> for <span className="text-indigo-800">Enhanced Living.</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our integrated approach to interior and exterior design allows us to provide a comprehensive solution that best meets our clients' needs.
          </p>
          <button className="bg-indigo-800 text-white px-6 py-3 rounded-md shadow hover:bg-indigo-700 transition">
            Get a Quote
          </button>
        </div>

        {/* Image Section */}
        <div className="flex gap-4">
          <img
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=400&q=80"
            alt="Interior 1"
            className="w-1/2 rounded-xl object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80"
            alt="Interior 2"
            className="w-1/2 rounded-xl object-cover"
          />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Email Input */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-gray-500 text-sm sm:text-base">
            No one loves, seeks, or desires pain for its own sake.
          </p>
          <div className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button className="bg-green-900 text-white px-4 py-2 rounded-r-md hover:bg-green-800">
              →
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <span className="text-xl font-bold text-green-900">10+</span>
            <p className="text-sm text-gray-600">Restaurant</p>
          </div>
          <div>
            <span className="text-xl font-bold text-green-900">109</span>
            <p className="text-sm text-gray-600">Rooms</p>
          </div>
          <div>
            <span className="text-xl font-bold text-green-900">29</span>
            <p className="text-sm text-gray-600">GYM</p>
          </div>
          <div>
            <span className="text-xl font-bold text-green-900">7</span>
            <p className="text-sm text-gray-600">Resorts</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
