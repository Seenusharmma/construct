import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10 relative z-10">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Karan Enterprises</h2>
          <p className="text-sm text-gray-300">
            Building your dreams with quality and trust. Reach us for projects,
            quotes, or general inquiries.
          </p>
        </div>

        {/* Live Address */}
        <motion.div
          className="flex flex-col gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h3 className="text-lg font-medium mb-2">Live Address</h3>
          <div className="flex items-start gap-2 text-sm">
            <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
            <p>45/12 Skyline Avenue, Sector 17, Ranchi, Jharkhand, India</p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="w-5 h-5 text-green-400" />
            <span>+91 xxxxx xxxxx</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-5 h-5 text-red-400" />
            <span>karanenterprises@.com</span>
          </div>
        </motion.div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-medium mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Projects</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Karan Enterprises. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
