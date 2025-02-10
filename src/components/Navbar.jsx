import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main navbar container */}
        <div className="flex items-center h-16 justify-between">
          {/* Mobile Menu Toggle (left-aligned) */}
          <div className="md:hidden mr-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block w-full">
            <div className="flex justify-center items-center space-x-8">
              <Link
                to="/"
                className="text-2xl font-bold hover:text-gray-300 transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/research"
                className="text-2xl font-bold hover:text-gray-300 transition duration-300"
              >
                Research
              </Link>
              <Link
                to="/projects"
                className="text-2xl font-bold hover:text-gray-300 transition duration-300"
              >
                Projects
              </Link>
              <Link
                to="/"
                className="text-2xl font-bold text-gray-500"
              >
                Resume
              </Link>
              
            </div>
            {/* End of Desktop Menu */}
          </div>
        </div>
      </div>

      {/* Mobile Menu (dropdown) */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-3 space-y-1 text-center">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block text-2xl font-bold hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/research"
            onClick={() => setIsOpen(false)}
            className="block text-2xl font-bold hover:text-gray-300 transition duration-300"
          >
            Research
          </Link>
          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="block text-2xl font-bold hover:text-gray-300 transition duration-300"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-2xl font-bold hover:text-gray-300 transition duration-300"
          >
            Resume
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
