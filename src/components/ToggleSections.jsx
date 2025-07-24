import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ToggleItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-4">
      {/* Title + Button */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-700 hover:text-black">{title}</h3>
        <button className="text-2xl text-gray-700 focus:outline-none hover:text-black hover:font-bold">
          {isOpen ? "-" : "+"}
        </button>
      </div>

      {/* Animated Description */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden mt-2 text-gray-700"
          >
            <p>{description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ToggleSection = () => {
  return (
    <div className="max-w-2xl mx-auto  p-6 mt-10 ">
      <h2 className="text-2xl font-bold text-black mb-4">Our Values</h2>
      
      <ToggleItem
        title="Mission"
        description="To deliver high-quality, sustainable, and safe infrastructure solutions that enhance connectivity and mobility."
      />
      <ToggleItem
        title="Vision"
        description="To be the trusted partner for infrastructure development in the transport sector."
      />
      <ToggleItem
        title="Motto"
        description="Serving Infrastructure Development for a Better Tomorrow."
      />
    </div>
  );
};

export default ToggleSection;
