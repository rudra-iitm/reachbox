import React, { useState } from 'react';

const DropdownMenu = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative inline-block border ${isDarkMode ? 'border-gray-500' : 'border-gray-300'} px-4 rounded-md ${isDarkMode ? 'bg-[#1F1F1F]' : 'bg-white'}`}>
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className={`text-${isDarkMode ? 'white' : 'black'} text-lg focus:outline-none rounded-lg py-1 text-center inline-flex items-center`}
        type="button"
      >
        ...
      </button>
      {isOpen && (
        <div
          id="dropdown"
          className={`z-10 absolute right-0 mt-2 ${isDarkMode ? 'bg-gray-700 divide-gray-600' : 'bg-white divide-gray-100'} divide-y rounded-lg shadow w-44`}
        >
          <ul
            className={`py-2 text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className={`block px-4 py-2 hover:${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-100'} ${isDarkMode ? '' : 'hover:bg-gray-100'}`}
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block px-4 py-2 hover:${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-100'} ${isDarkMode ? '' : 'hover:bg-gray-100'}`}
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block px-4 py-2 hover:${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-100'} ${isDarkMode ? '' : 'hover:bg-gray-100'}`}
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block px-4 py-2 hover:${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-100'} ${isDarkMode ? '' : 'hover:bg-gray-100'}`}
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
