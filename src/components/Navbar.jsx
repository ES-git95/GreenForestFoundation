import React, { useState, useEffect, useRef } from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { HashLink as Link } from 'react-router-hash-link';

export default function Navbar() {
  const [selectedSection, setSelectedSection] = useState("about");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    closeDropdown();
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <header className="bg-green-950 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <img
          className="object-cover object-center rounded-full w-12 h-auto"
          alt="hero"
          src="../src/assets/WhatsApp Image 2024-01-30 at 20.28.43.jpeg"
        />
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="/#about" className={`ml-3 text-xl ${selectedSection === 'about' ? 'text-green-500' : 'text-white'}`} onClick={() => handleSectionClick('about')}>
            Green Forest Foundation
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <Link to="/#projects" className={`mr-5 ${selectedSection === 'projects' ? 'text-green-500' : 'text-white'}`} onClick={() => handleSectionClick('projects')}>
            Il Progetto
          </Link>
          <Link to="/PetPark" className={`mr-5 ${selectedSection === 'PetPark' ? 'text-green-500' : 'text-white'}`} onClick={() => handleSectionClick('PetPark')}>
            PetPark
          </Link>
          <Link to="/Comuni" className={`mr-5 ${selectedSection === 'Comuni' ? 'text-green-500' : 'text-white'}`} onClick={() => handleSectionClick('Comuni')}>
            Per I comuni
          </Link>
          <Link to="/Contacts#JoinUs" className={`mr-5 ${selectedSection === 'JoinUs' ? 'text-green-500' : 'text-white'}`} onClick={() => handleSectionClick('JoinUs')}>
            Unisciti a noi
          </Link>
        </nav>
        <div className="relative inline-flex" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="inline-flex items-center bg-gray-500 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 text-white"
          >
            Contatti
            <ArrowRightIcon className="w-4 h-4 ml-1 text-white" />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-7 bg-gray-800 text-white rounded shadow-md">

              <Link to="/Contacts#Subscription" className="block px-14 py-1 hover:bg-gray-700" onClick={() => handleSectionClick('Subscription')}>Iscrizione</Link>
              <Link to="/Contacts#Tesseramento" className="block px-14 py-1 hover:bg-gray-700" onClick={() => handleSectionClick('Tesseramento')}>Tesseramento</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
