import React from 'react'
import { motion } from "framer-motion";

const About = () => {
  return (
      <section className="w-full px-4 py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Image */}
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          src="https://via.placeholder.com/400x400"
          alt="About"
          className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
        />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 space-y-5"
        >
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="text-gray-600 text-lg">
            We are passionate developers who love creating intuitive and beautiful web experiences.
            Our team works with modern tools and technologies to bring your ideas to life.
          </p>
          <p className="text-gray-600 text-lg">
            From responsive design to interactive animations, we craft each component with care and precision.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
