"use client";
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // NavLink style functions
  const getLinkStyles = ({ isActive }) =>
    isActive
      ? "gap-2.5 px-6 py-3 font-semibold text-white rounded-md bg-neutral-800"
      : "text-neutral-200";

  const getMobileLinkStyles = ({ isActive }) =>
    isActive
      ? "px-6 py-3 font-semibold text-white rounded-md bg-neutral-800 w-full text-center"
      : "text-neutral-200 py-3";

  return (
    <header className="relative flex items-center justify-between w-full px-6 py-5 text-sm font-medium border-b border-solid border-b-neutral-800 sm:px-10 md:px-16 lg:px-20">
      {/* Logo */}
      <NavLink to="/" className="z-10">
        <img
          src="https://shivshankar1201.sirv.com/digital-agency/Navbar/SquareUp%20Logo.svg"
          alt="SquareUp Logo"
          className="w-[100px] sm:w-[118px] object-contain"
        />
      </NavLink>

      {/* Hamburger Button (Mobile) */}
      <button
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        className="z-20 block p-2 text-white lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
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

      {/* Contact Button (Desktop only) */}
      <NavLink
        to="/contact"
        className="z-10 hidden px-5 py-3 font-semibold text-neutral-800 bg-lime-400 rounded-md lg:flex"
      >
        Contact Us
      </NavLink>

      {/* Desktop Navigation */}
      <nav
        role="navigation"
        className="hidden lg:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 gap-6 items-center whitespace-nowrap min-w-60 text-neutral-200"
      >
        <NavLink to="/" className={getLinkStyles}>
          Home
        </NavLink>
        <NavLink to="/services" className={getLinkStyles}>
          Services
        </NavLink>
        <NavLink to="/work" className={getLinkStyles}>
          Work
        </NavLink>
        <NavLink to="/process" className={getLinkStyles}>
          Process
        </NavLink>
        <NavLink to="/about" className={getLinkStyles}>
          About
        </NavLink>
        <NavLink to="/careers" className={getLinkStyles}>
          Careers
        </NavLink>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-10 flex flex-col items-center justify-center bg-zinc-900 bg-opacity-95 lg:hidden"
        >
          <nav role="navigation" className="flex flex-col items-center gap-6 text-lg">
            <NavLink to="/" className={getMobileLinkStyles}>
              Home
            </NavLink>
            <NavLink to="/services" className={getMobileLinkStyles}>
              Services
            </NavLink>
            <NavLink to="/work" className={getMobileLinkStyles}>
              Work
            </NavLink>
            <NavLink to="/process" className={getMobileLinkStyles}>
              Process
            </NavLink>
            <NavLink to="/about" className={getMobileLinkStyles}>
              About
            </NavLink>
            <NavLink to="/careers" className={getMobileLinkStyles}>
              Careers
            </NavLink>
            <NavLink
              to="/contact"
              className="mt-4 px-8 py-3 bg-lime-400 rounded-md text-neutral-800 font-medium"
            >
              Contact Us
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
