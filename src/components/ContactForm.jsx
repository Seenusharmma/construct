import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const ContactPage = () => {
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { left, top, width, height } = card.getBoundingClientRect()
      const x = clientX - left - width / 2
      const y = clientY - top - height / 2

      gsap.to(card, {
        rotationY: x / 20,
        rotationX: -y / 20,
        transformPerspective: 1000,
        transformOrigin: 'center',
        duration: 0.6,
        ease: 'power2.out',
      })
    }

    const resetRotation = () => {
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.6,
        ease: 'power2.out',
      })
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', resetRotation)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', resetRotation)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-black flex items-center justify-center p-6">
      <div
        ref={cardRef}
        className="relative w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl transition-transform transform-style-preserve-3d p-8 md:p-12"
      >
        <h2 className="text-4xl font-bold text-white mb-6 text-center">
          Contact Us
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block text-white mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-white mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-white mb-1">Message</label>
            <textarea
              rows="5"
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage
