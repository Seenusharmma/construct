import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const MainVideoSection = () => {
  const headingRef = useRef(null)
  const paragraphRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(
      headingRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    ).fromTo(
      paragraphRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      '-=0.5' // overlaps with the heading animation
    )
  }, [])

  return (
    <div>
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

        {/* Semi-transparent black overlay (under the gradient) */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

        {/* White-to-transparent gradient overlay (on top) */}
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-30"
          style={{
            background:
              'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 5%, rgba(255,255,255,0) 90%)',
          }}
        />

        {/* Content */}
        <div className="relative z-20 flex items-center justify-center h-full text-white text-center">
          <div>
            <h1
              ref={headingRef}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Welcome To M/S Karan Enterprises
            </h1>
            <p
              ref={paragraphRef}
              className="text-lg md:text-2xl"
            >
              Serving Infrastructure for a Better Tomorrow
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainVideoSection
