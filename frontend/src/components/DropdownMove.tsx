import React, { useState } from 'react';

const DropdownMove = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`relative inline-block border ${isDarkMode ? 'border-gray-500' : 'border-gray-300'} px-4 rounded-md ${isDarkMode ? 'bg-[#1F1F1F]' : 'bg-white'}`}>
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className={`text-${isDarkMode ? 'white' : 'black'} focus:outline-none rounded-lg py-2.5 text-center inline-flex items-center`}
        type="button"
      >
        Move
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
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
                className={`block px-4 py-2 hover:${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-100'} ${isDarkMode ? 'dark:hover:bg-gray-600 dark:hover:text-white' : ''}`}
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block px-4 py-2 hover:${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-100'} ${isDarkMode ? 'dark:hover:bg-gray-600 dark:hover:text-white' : ''}`}
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block px-4 py-2 hover:${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-100'} ${isDarkMode ? 'dark:hover:bg-gray-600 dark:hover:text-white' : ''}`}
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block px-4 py-2 hover:${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-100'} ${isDarkMode ? 'dark:hover:bg-gray-600 dark:hover:text-white' : ''}`}
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

export default DropdownMove;
