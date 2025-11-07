import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/music", label: "Music" },
    { path: "/booking", label: "Booking" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-red-700/30 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* DJ Logo / Name */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-widest text-red-500 hover:text-red-400 transition-all duration-300"
        >
          DJ BEATZ
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`relative font-medium transition duration-300 ${
                  location.pathname === link.path
                    ? "text-red-500 after:w-full"
                    : "text-gray-200 hover:text-red-400"
                } after:content-[''] after:block after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 after:w-0 hover:after:w-full`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
