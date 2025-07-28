import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);
  const aranRef = useRef(null);
  const nterprisesRef = useRef(null);

  useEffect(() => {
    gsap.set([aranRef.current, nterprisesRef.current], {
      width: 0,
      opacity: 0,
      overflow: "hidden",
      display: "inline-block",
    });

    const timeline = gsap.timeline({ delay: 1.2 });

    timeline.to(aranRef.current, {
      width: "auto",
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    });

    timeline.to(
      nterprisesRef.current,
      {
        width: "auto",
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.9"
    );
  }, []);

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
    <div className="sticky top-0 z-500 bg-white/30 backdrop-blur-sm rounded-b-[36px] shadow-[0_10px_20px_rgba(0,0,0,0.12),_0_4px_6px_rgba(0,0,0,0.08)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 sm:gap-4">
          <img src="./logo.svg" alt="logo" height={40} width={40} />
          <h1
            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight flex items-center tracking-widest"
            style={{
              fontFamily: "'Cinzel', serif",
              letterSpacing: "0.1em",
            }}
          >
            <span
              style={{
                color: "#ffcc00",
                textShadow: "0 1px 5px rgba(255,204,0,0.7)",
              }}
            >
              K
            </span>
            <span
              ref={aranRef}
              className="text-black whitespace-nowrap"
              style={{
                display: "inline-block",
                overflow: "hidden",
                whiteSpace: "nowrap",
                fontWeight: 500,
              }}
            >
              aran
            </span>
            <span
              style={{
                color: "#ffcc00",
                textShadow: "0 1px 5px rgba(255,204,0,0.7)",
              }}
            >
              E
            </span>
            <span
              ref={nterprisesRef}
              className="text-black whitespace-nowrap"
              style={{
                display: "inline-block",
                overflow: "hidden",
                whiteSpace: "nowrap",
                fontWeight: 500,
              }}
            >
              nterprises
            </span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 lg:gap-10 items-center">
          <ul
            className="flex gap-6 lg:gap-10 items-center text-base sm:text-lg md:textmd font-thin"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {routes.map((route, i) => (
              <NavLink
                key={i}
                to={route.to}
                className={({ isActive }) =>
                  `cursor-pointer transition-colors duration-300 ${
                    isActive ? "border-b-2 border-[#ffcc00]" : "text-gray-800"
                  } hover:text-[#ffcc00]`
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
            className="text-gray-800 transition-colors duration-300 hover:text-[#ffcc00]"
          >
            {isOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Animated) */}
      <div
        ref={menuRef}
        className="md:hidden overflow-hidden bg-white/30 backdrop-blur-sm border-t border-gray-200 px-4 sm:px-6 py-4 rounded-b-[36px]"
        style={{
          display: "none",
          opacity: 0,
          height: 0,
          boxShadow:
            "0 10px 20px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05)",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <ul
          className="flex flex-col gap-4 text-base sm:text-lg font-normal leading-snug"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {routes.map((route, i) => (
            <NavLink
              key={i}
              to={route.to}
              className={({ isActive }) =>
                `cursor-pointer transition-colors duration-300 ${
                  isActive ? "border-b-2 border-[#ffcc00]" : "text-gray-800"
                } hover:text-[#ffcc00]`
              }
              onClick={() => setIsOpen(false)}
            >
              <li ref={(el) => (menuItemsRef.current[i] = el)}>
                {route.label}
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
