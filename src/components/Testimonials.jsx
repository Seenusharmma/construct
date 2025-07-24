import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Project Manager",
    feedback:
      "Royal Infrastruc Ltd delivered quality on time. Their dedication and expertise made our vision a reality.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Verma",
    role: "Architect",
    feedback:
      "Their attention to detail and client-first approach is unmatched. Highly recommended for large-scale projects.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Mehra",
    role: "Engineer",
    feedback:
      "Professional, skilled, and efficient. Working with them was seamless from start to finish.",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">What Our Clients Say</h2>
        <p className="text-gray-600">Real feedback from real professionals.</p>
      </div>

      <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
            transition={{ type: "spring", stiffness: 100, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow-md cursor-pointer transition-transform"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">“{item.feedback}”</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
