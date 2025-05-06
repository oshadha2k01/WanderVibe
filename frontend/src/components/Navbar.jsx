import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-cloud shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            WanderVibe
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className={({ isActive }) => 
              isActive ? "text-primary font-medium" : "text-midnight hover:text-primary transition-colors duration-200"
            }>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              isActive ? "text-primary font-medium" : "text-midnight hover:text-primary transition-colors duration-200"
            }>
              About Us
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => 
              isActive ? "text-primary font-medium" : "text-midnight hover:text-primary transition-colors duration-200"
            }>
              Services
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              isActive ? "text-primary font-medium" : "text-midnight hover:text-primary transition-colors duration-200"
            }>
              Contact Us
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-midnight hover:text-primary focus:outline-none transition-colors duration-200"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-cloud absolute top-16 left-0 right-0 shadow-md z-10">
            <div className="flex flex-col space-y-4 px-4 py-6">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  isActive ? "text-primary font-medium" : "text-midnight hover:text-primary transition-colors duration-200"
                }
                onClick={closeMenu}
              >
                Home
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  isActive ? "text-primary font-medium" : "text-midnight hover:text-primary transition-colors duration-200"
                }
                onClick={closeMenu}
              >
                About Us
              </NavLink>
              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  isActive ? "text-primary font-medium" : "text-midnight hover:text-primary transition-colors duration-200"
                }
                onClick={closeMenu}
              >
                Services
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  isActive ? "text-primary font-medium" : "text-midnight hover:text-primary transition-colors duration-200"
                }
                onClick={closeMenu}
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
