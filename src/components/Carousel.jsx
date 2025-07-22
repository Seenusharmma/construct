import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { id: 1, url: "https://innodez.com/wp-content/uploads/2025/01/Structural-construction-products.jpg" },
  { id: 2, url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgE6DVIgE4Fiw9Sj0bBW6TXqy-LHjIMOdTQQ&s" },
  { id: 3, url: "https://www.shutterstock.com/shutterstock/videos/21798493/thumb/1.jpg?ip=x480" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  // Auto-play logic (change slide every 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full  max-w-full mx-auto px-4 py-6">
      <div className="relative overflow-hidden rounded-2xl shadow-lg">
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
          {slides.map((slide) => (
            <img
              key={slide.id}
              src={slide.url}
              alt="Slide"
              className="min-w-full object-cover h-64 sm:h-80 md:h-96 transition-opacity"
            />
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
        >
          <ChevronRight />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 w-full flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 w-2 rounded-full ${current === index ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
