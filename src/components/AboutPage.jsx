import React from 'react'
import { motion } from 'framer-motion'


const certifications = [
  {
    title: 'ISO 9001:2015 Certification',
    description: 'Certified for Quality Management in Construction.',
    image: 'https://5.imimg.com/data5/SELLER/Default/2021/12/YW/DE/WC/123720392/iso-pic-jpeg-1-.jpeg',
  },
  {
    title: 'Green Building Certificate',
    description: 'Recognized for sustainable construction practices.',
    image: 'https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/How_to_Obtain_Green_Building_Certification_in_India_Corpseed.png',
  },
]

const AboutPage = () => {
  return (
    <div className="bg-gray-100 text-gray-800 overflow-hidden">
      {/* Hero / Intro Section */}
      <motion.section
        className="min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-yellow-50 to-blue-100 px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Building the Future with Excellence
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            We are a leading construction company delivering reliable, innovative, and sustainable infrastructure.
          </p>
        </div>
      </motion.section>

      {/* Company Details Section */}
      <motion.section
        className="py-16 px-6 md:px-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Our Company</h2>
        <p className="max-w-4xl mx-auto text-lg text-center">
          Founded in 2010, our company has delivered more than 300 successful projects across India.
          Our team of engineers, architects, and project managers are dedicated to shaping skylines
          with innovation, integrity, and environmental responsibility.
        </p>
      </motion.section>

      {/* Owner Section */}
      <motion.section
        className="bg-gray-50 py-16 px-6 md:px-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-10 text-center">Meet Our Founder</h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="https://static.theceomagazine.net/wp-content/uploads/2018/10/29155949/Maher-Merehbi_ARABIAN-CONSTRUCTION-COMPANY.jpg"
            alt="Owner"
            className="rounded-full shadow-lg w-64 h-64 object-cover"
          />
          <div className="text-lg max-w-xl">
            <h3 className="text-2xl font-semibold mb-2">Mr. Rajesh Verma</h3>
            <p>
              With over 20 years of experience in the construction industry, Mr. Verma leads the company
              with vision and dedication. His leadership has steered the company towards sustainable growth,
              innovation, and exceptional client satisfaction.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Certification Section */}
      <motion.section
        className="py-16 px-6 md:px-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Our Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
              <p>{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      
    </div>
  )
}

export default AboutPage
