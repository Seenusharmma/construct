// components/ServicesPage.jsx
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ShieldCheck,
  Building,
  Wrench,
  HardHat,
  Ruler,
  Lightbulb,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: <Building className="w-10 h-10 text-blue-500" />,
    title: 'Architecture Design',
    desc: 'Modern, innovative, and sustainable designs for residential and commercial structures.',
  },
  {
    icon: <Wrench className="w-10 h-10 text-green-500" />,
    title: 'Construction Management',
    desc: 'Efficient project management from blueprint to build with clear timelines.',
  },
  {
    icon: <HardHat className="w-10 h-10 text-yellow-500" />,
    title: 'Site Supervision',
    desc: 'On-site quality control ensuring all work meets industry and safety standards.',
  },
  {
    icon: <Ruler className="w-10 h-10 text-purple-500" />,
    title: 'Interior Planning',
    desc: 'Intelligent space planning for luxurious and comfortable interior environments.',
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-pink-500" />,
    title: 'Energy Efficiency',
    desc: 'Eco-friendly systems for long-term energy savings and sustainable living.',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-red-500" />,
    title: 'Compliance & Safety',
    desc: 'Regulatory-compliant construction with best-in-class safety practices.',
  },
]

const ServicesPage = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.service-card')
    gsap.fromTo(
      cards,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We offer a range of services tailored for excellence and client satisfaction.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesPage
