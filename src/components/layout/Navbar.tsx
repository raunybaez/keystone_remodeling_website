import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-slate-800">
              Keystone Remodeling
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-slate-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              About
            </Link>
            <Link to="/services" className="text-slate-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              Services
            </Link>
            <Link to="/projects" className="text-slate-600 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Contact Us
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-teal-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/" 
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-teal-600 hover:bg-slate-50"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-teal-600 hover:bg-slate-50"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link 
                to="/services" 
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-teal-600 hover:bg-slate-50"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link 
                to="/projects" 
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-teal-600 hover:bg-slate-50"
                onClick={toggleMenu}
              >
                Projects
              </Link>
              <Link 
                to="/contact" 
                className="block px-3 py-2 rounded-md text-base font-medium bg-teal-600 text-white hover:bg-teal-700"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
