import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const images = [
  "https://media.istockphoto.com/id/1176581571/photo/large-construction-site-including-several-cranes-with-clear-sky-and-the-sun.jpg?s=612x612&w=0&k=20&c=jOtmetjH-lOQ9oMnjsqLm33e0LOm2_SdhUb8X1btUGo=",
  "https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-156.jpg?ga=GA1.1.1092627171.1730971896&semt=ais_hybrid&w=740",
  "https://media.istockphoto.com/id/2203822349/photo/development-of-residential-housing-in-american-suburbs-unfinished-frames-of-apartment-condos.webp?a=1&b=1&s=612x612&w=0&k=20&c=KkziT8ove67K2_au0a4xPF2QXMK2_hRj2jH5-SqcPjM=",
  "https://plus.unsplash.com/premium_photo-1663046024054-47d889bb1f1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmFpbHdheSUyMGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
  "https://media.istockphoto.com/id/1346826466/photo/miami-new-overpass.webp?a=1&b=1&s=612x612&w=0&k=20&c=lw7U9u4GbV9Yz5JgTDe9fxqA-2YinllKwZNE3sGZfcg=",
  "https://media.istockphoto.com/id/671242242/photo/dam-under-construction.webp?a=1&b=1&s=612x612&w=0&k=20&c=goJ-6MiM5crEB8rl9fzTzw6gKK_FwofvNeV0UBmuzEg=",
]

const GalleryHead = () => {
  const galleryRef = useRef([])

  useEffect(() => {
    galleryRef.current.forEach((img, i) => {
      gsap.fromTo(
        img,
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
            end: "bottom 60%",
            scrub: false,
          },
          duration: 1,
          ease: "power3.out",
        }
      )
    })
  }, [])

  const handleMouseMove = (e, index) => {
    const image = galleryRef.current[index]
    const rect = image.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    gsap.to(image, {
      x: x * 0.05,
      y: y * 0.05,
      scale: 1.02,
      duration: 0.3,
    })
  }

  const handleMouseLeave = (index) => {
    const image = galleryRef.current[index]
    gsap.to(image, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.3,
    })
  }

  return (
    <div className="bg-green-50 min-h-screen text-black p-8">
      <h1 className="text-5xl font-bold text-center mb-12">Our Projects </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-xl transform transition-all duration-300"
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <img
              src={src}
              alt={`Gallery ${index}`}
              className="w-full h-[300px] object-cover"
              ref={(el) => (galleryRef.current[index] = el)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default GalleryHead
