import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isStakeholdersOpen, setStakeholdersOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleStakeholders = () =>
    setStakeholdersOpen((prev) => !prev);

  return (
    <nav className="w-full bg-green-700 p-4 text-white shadow-lg fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold tracking-wider">
          Carbon<span className="text-yellow-400">_track</span>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Stakeholders Dropdown */}
          <div className="relative">
            <button
              className="hover:text-yellow-400 font-medium"
              onClick={toggleStakeholders}
            >
              Stakeholders
            </button>
            {isStakeholdersOpen && (
              <div className="absolute top-full mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg">
                <Link
                  to="/industries-overview"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setStakeholdersOpen(false)}
                >
                  Industries
                </Link>
                <Link
                  to="/government"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setStakeholdersOpen(false)}
                >
                  Government
                </Link>
                <Link
                  to="/private"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setStakeholdersOpen(false)}
                >
                  Private Sector
                </Link>
              </div>
            )}
          </div>
          <Link to="/reviews" className="hover:text-yellow-400 font-medium">
            Reviews
          </Link>
          <Link to="/aboutus" className="hover:text-yellow-400 font-medium">
            About Us
          </Link>
          <Link to="/signup" className="hover:text-yellow-400 font-medium">
            SignUp
          </Link>
          <Link to="/login" className="hover:text-yellow-400 font-medium">
            LogIn
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          ></div>

          {/* Slide-In Menu */}
          <div className="fixed top-0 right-0 w-2/5 bg-green-800 text-white z-50 p-4 shadow-lg">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Menu Links */}
            <div className="space-y-6 mt-8">
              {/* Stakeholders Dropdown in Mobile */}
              <div>
                <button
                  className="text-lg font-medium w-full text-left flex items-center justify-between"
                  onClick={toggleStakeholders}
                >
                  Stakeholders
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-5 h-5 transition-transform ${
                      isStakeholdersOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isStakeholdersOpen && (
                  <div className="mt-2 space-y-2">
                    <Link
                      to="/industries-overview"
                      className="block text-sm hover:text-yellow-400"
                      onClick={toggleMenu}
                    >
                      Industries
                    </Link>
                    <Link
                      to="/government"
                      className="block text-sm hover:text-yellow-400"
                      onClick={toggleMenu}
                    >
                      Government
                    </Link>
                    <Link
                      to="/private"
                      className="block text-sm hover:text-yellow-400"
                      onClick={toggleMenu}
                    >
                      Private Sector
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to="/reviews"
                className="block text-lg font-medium hover:text-yellow-400"
                onClick={toggleMenu}
              >
                Reviews
              </Link>
              <Link
                to="/aboutus"
                className="block text-lg font-medium hover:text-yellow-400"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                to="/signup"
                className="block text-lg font-medium hover:text-yellow-400"
                onClick={toggleMenu}
              >
                SignUp
              </Link>
              <Link
                to="/login"
                className="block text-lg font-medium hover:text-yellow-400"
                onClick={toggleMenu}
              >
                LogIn
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
