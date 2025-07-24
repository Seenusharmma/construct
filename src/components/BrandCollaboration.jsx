import React from 'react'

const brands = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtMChWa1g5aEQzNZ5WRapGUOaDr2c5sgSDWA&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAMB7PfNSqlVGUcuyo0ryheVgeRlnqNqNYAM8UmaxTdS8hCfNA2soajOo_UD9rWe6TeHM&usqp=CAU',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYyWCniA81i4JAeDrUbRh5xRWIUrEakE43RQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0TveTaX6XScIGhBU8LkTLqBO3p0_Bcv6hMg&s',
]

const BrandCollaboration = () => {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Our Major Clients
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max space-x-16 marquee">
          {brands.concat(brands).map((brand, idx) => (
            <img
              key={idx}
              src={brand}
              alt={`Brand ${idx}`}
              className="h-28 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        .marquee {
          display: flex;
          animation: scroll 5s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}

export default BrandCollaboration
