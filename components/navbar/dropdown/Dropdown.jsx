'use client'

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const languages = ['EN', 'ES', 'FR', 'DE', 'IT', 'PT', 'RU', 'ZH'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="flex justify-center">
      <div className="relative inline-block text-left">
        {/* Dropdown button */}
        <button
          type="button"
          className="lang inline-flex justify-center w-full rounded-[10px] border border-white px-2 py-[0.75rem] bg-transparent"
          onClick={toggleDropdown}
        >
          {selectedLanguage}
          <FaChevronDown className={`relative top-[5px] ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Dropdown menu */}
        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-transparent border border-white-300 ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="overflow-hidden rounded-md shadow-xs">
              {languages.map((language, index) => (
                <a
                  key={index}
                  href="#"
                  className="lang block px-2 py-2 hover:text-black bg-black/50 hover:bg-white/80"
                  onClick={() => handleSelect(language)}
                >
                  {language}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}