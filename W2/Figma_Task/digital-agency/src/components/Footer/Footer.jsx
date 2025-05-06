import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="self-stretch px-6 sm:px-10 md:px-16 lg:px-20 py-8 sm:py-10 w-full border-t border-solid border-t-[color:var(--Grey-15,#262626)]">
      <div className="flex flex-col lg:flex-row relative justify-between items-center w-full gap-8 lg:gap-0">
        <Link to="/">
        <img
          src="https://shivshankar1201.sirv.com/digital-agency/Footer/SquareUP%20logo.svg"
          alt="SquareUp Logo"
          className="object-contain z-0 shrink-0 self-center lg:self-stretch my-auto aspect-[2.95] w-[100px] sm:w-[118px]"
        />
        </Link>
        {/* Social Media Links - Centered on mobile, right-aligned on desktop */}
        <div className="flex z-0 gap-5 items-center self-center lg:self-stretch py-2.5 pr-2.5 pl-5 my-auto rounded-lg border border-solid border-[color:var(--Grey-15,#262626)] min-w-60 order-3 lg:order-none">
          <h3 className="self-stretch my-auto text-sm sm:text-base font-medium text-neutral-200">
            Stay Connected
          </h3>
          <div className="flex gap-2.5 items-start self-stretch my-auto">
            <a href="#" className="flex flex-col justify-center p-3 sm:p-4 rounded-md w-[45px] sm:w-[52px]">
              <img
                src="https://shivshankar1201.sirv.com/digital-agency/Footer/Fb%20logo%20Social%20Media%201.svg"
                alt="Social Media 1"
                className="object-contain w-4 sm:w-5 aspect-square"
              />
            </a>
            <a href="#" className="flex flex-col justify-center p-3 sm:p-4 rounded-md w-[45px] sm:w-[52px]">
              <img
                src="https://shivshankar1201.sirv.com/digital-agency/Footer/Social%20Media%202.svg"
                alt="Social Media 2"
                className="object-contain w-4 sm:w-5 aspect-square"
              />
            </a>
            <a href="#" className="flex flex-col justify-center p-3 sm:p-4 rounded-md w-[45px] sm:w-[52px]">
              <img
                src="https://shivshankar1201.sirv.com/digital-agency/Footer/Social%20Media%203.svg"
                alt="Social Media 3"
                className="object-contain w-4 sm:w-5 aspect-square"
              />
            </a>
          </div>
        </div>

        {/* Navigation - Centered on all devices */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-5 items-center self-center text-sm sm:text-base font-medium text-neutral-200 order-2 lg:order-none lg:absolute lg:top-2/4 lg:left-2/4 lg:-translate-x-2/4 lg:-translate-y-2/4">
          <Link to="/" className="self-stretch my-auto text-neutral-200">Home</Link>
          <Link to="/services" className="self-stretch my-auto text-neutral-200">Services</Link>
          <Link to="/work" className="self-stretch my-auto text-neutral-200">Work</Link>
          <Link to="/process" className="self-stretch my-auto text-neutral-200">Process</Link>
          <Link to="/about" className="self-stretch my-auto text-neutral-200">About</Link>
          <Link to="/careers" className="self-stretch my-auto text-neutral-200">Careers</Link>
          <Link to="/contact" className="self-stretch my-auto text-neutral-200">Contact</Link>
        </nav>
      </div>
      <div className="mt-8 sm:mt-10 w-full border border-solid bg-neutral-800 border-neutral-800 min-h-px" />
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 justify-between items-center mt-8 sm:mt-10 w-full">
        <div className="flex flex-wrap gap-4 sm:gap-6 items-center justify-center sm:justify-start self-stretch my-auto text-sm sm:text-base min-w-60 text-neutral-200">
          <a href="mailto:hello@squareup.com" className="flex gap-1.5 items-center pb-2 sm:pb-3 whitespace-nowrap border-b border-solid border-b-[color:var(--Grey-15,#262626)]">
            <img
              src="https://shivshankar1201.sirv.com/digital-agency/Footer/Email.svg"
              alt="Email"
              className="object-contain shrink-0 self-stretch my-auto w-4 sm:w-5 aspect-square"
            />
            <span className="self-stretch my-auto text-neutral-200">
              hello@squareup.com
            </span>
          </a>
          <a href="tel:+919181323209" className="flex gap-1.5 items-center pb-2 sm:pb-3 border-b border-solid border-b-[color:var(--Grey-15,#262626)]">
            <img
              src="https://shivshankar1201.sirv.com/digital-agency/Footer/Phone.svg"
              alt="Phone"
              className="object-contain shrink-0 self-stretch my-auto w-4 sm:w-5 aspect-square"
            />
            <span className="self-stretch my-auto text-neutral-200">
              +91 91813 23 2309
            </span>
          </a>
          <address className="flex gap-1.5 items-center pb-2 sm:pb-3 border-b border-solid border-b-[color:var(--Grey-15,#262626)] not-italic">
            <img
              src="https://shivshankar1201.sirv.com/digital-agency/Footer/Location.svg"
              alt="Location"
              className="object-contain shrink-0 self-stretch my-auto w-4 sm:w-5 aspect-square"
            />
            <span className="self-stretch my-auto text-neutral-200">
              Somewhere in the World
            </span>
          </address>
        </div>
        <p className="self-stretch my-auto text-xs sm:text-sm text-neutral-400 text-center sm:text-right">
          © 2025 SquareUp. All rights reserved.
          Developed By SSPGupta
        </p>
      </div>
    </footer>
  );
};

export default Footer;