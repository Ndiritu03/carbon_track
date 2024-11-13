import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isStakeholdersOpen, setStakeholdersOpen] = useState(false);
  const communityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        communityRef.current &&
        !communityRef.current.contains(event.target as Node)
      ) {
        setStakeholdersOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full bg-green-700  p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold tracking-wider">
          Carbon<span className="text-yellow-400">_track</span>
        </Link>

        {/* Hamburger for mobile */}
        <div className="lg:hidden" onClick={() => setMenuOpen(!isMenuOpen)}>
          <button className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Menu links */}
        <div
          className={`lg:flex items-center space-x-6 transition-transform ${
            isMenuOpen ? 'block' : 'hidden'
          } lg:block`}
        >
          {/* Dropdown for Community */}
          <div className="relative" ref={communityRef}>
            <button
              className="hover:text-yellow-400 focus:outline-none font-medium"
              onClick={() => setStakeholdersOpen(!isStakeholdersOpen)}
              aria-haspopup="true"
              aria-expanded={isStakeholdersOpen}
            >
              Stakeholders
            </button>
            {isStakeholdersOpen && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-label="Community submenu"
              >
                <Link
                  to="/industies-overview"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setStakeholdersOpen(false)}
                  role="menuitem"
                >
                  Industries
                </Link>
                <Link
                  to="/goverment"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setStakeholdersOpen(false)}
                  role="menuitem"
                >
                  Goverment
                </Link>
                <Link
                  to="/private"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setStakeholdersOpen(false)}
                  role="menuitem"
                >
                  Private sector
                </Link>
              </div>
            )}
          </div>

          {/* Other links */}
          <Link to="/reviews" className="hover:text-yellow-400 font-medium">
            Reviews
          </Link>
          <Link to="/aboutus" className="hover:text-yellow-400 font-medium">
            About Us
          </Link>
          <Link to="/singup" className="hover:text-yellow-400 font-medium">
            SingUp
          </Link>
          <Link to="/login" className="hover:text-yellow-400 font-medium">
            LogIn
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;