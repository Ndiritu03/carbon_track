import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isCommunityOpen, setCommunityOpen] = useState(false);
  const communityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        communityRef.current &&
        !communityRef.current.contains(event.target as Node)
      ) {
        setCommunityOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full bg-gradient-to-r from-blue-600 to-blue-900 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold tracking-wider">
          IoT<span className="text-yellow-400">Community</span>
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
              onClick={() => setCommunityOpen(!isCommunityOpen)}
              aria-haspopup="true"
              aria-expanded={isCommunityOpen}
            >
              Community
            </button>
            {isCommunityOpen && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-label="Community submenu"
              >
                <Link
                  to="/participants"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setCommunityOpen(false)}
                  role="menuitem"
                >
                  Participants
                </Link>
                <Link
                  to="/ai-in-iot"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setCommunityOpen(false)}
                  role="menuitem"
                >
                  AI in IoT
                </Link>
                <Link
                  to="/women-in-iot"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setCommunityOpen(false)}
                  role="menuitem"
                >
                  Women in IoT
                </Link>
              </div>
            )}
          </div>

          {/* Other links */}
          <Link to="/awards" className="hover:text-yellow-400 font-medium">
            Awards
          </Link>
          <Link to="/join" className="hover:text-yellow-400 font-medium">
            Join Us
          </Link>
          <Link to="/about" className="hover:text-yellow-400 font-medium">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-yellow-400 font-medium">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;