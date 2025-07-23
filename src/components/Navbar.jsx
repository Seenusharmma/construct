import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);

  useEffect(() => {
    if (isOpen) {
      gsap.set(menuRef.current, { display: "block" });

      gsap.fromTo(
        menuRef.current,
        { y: -30, opacity: 0, height: 0 },
        { y: 0, opacity: 1, height: "auto", duration: 0.5, ease: "power3.out" }
      );

      gsap.fromTo(
        menuItemsRef.current,
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.1,
          delay: 0.1,
          ease: "power2.out",
        }
      );
    } else {
      gsap.to(menuRef.current, {
        y: -20,
        opacity: 0,
        height: 0,
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => {
          if (menuRef.current) menuRef.current.style.display = "none";
        },
      });
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const routes = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/gallery", label: "Gallery" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <div
      className="sticky top-0 z-50 bg-white/30 backdrop-blur-sm rounded-b-[36px] shadow-[0_10px_20px_rgba(0,0,0,0.12),_0_4px_6px_rgba(0,0,0,0.08)]"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h1 className="font-bold text-2xl sm:text-3xl leading-tight">
            <span className="text-red-500">K</span>aran
            <span className="text-red-500">E</span>nterprises
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 items-center">
          <ul className="flex gap-10 items-center text-lg font-semibold">
            {routes.map((route, i) => (
              <NavLink
                key={i}
                to={route.to}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "border-b-2 border-red-500"
                      : "text-gray-800 hover:text-red-500"
                  } cursor-pointer transition-colors duration-300`
                }
              >
                <li>{route.label}</li>
              </NavLink>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-gray-800 hover:text-red-500 transition-colors duration-300"
          >
            {isOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Animated) */}
      <div
        ref={menuRef}
        className="md:hidden overflow-hidden bg-white/30 backdrop-blur-sm border-t border-gray-200 px-6 py-4 rounded-b-[36px]"
        style={{
          display: "none",
          opacity: 0,
          height: 0,
          boxShadow: "0 10px 20px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <ul className="flex flex-col gap-6 text-lg font-semibold">
          {routes.map((route, i) => (
            <NavLink
              key={i}
              to={route.to}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-2 border-red-500"
                    : "text-gray-800 hover:text-red-500"
                } cursor-pointer transition-colors duration-300`
              }
              onClick={() => setIsOpen(false)}
            >
              <li ref={(el) => (menuItemsRef.current[i] = el)}>{route.label}</li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
