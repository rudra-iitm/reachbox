import React, { useState } from 'react';

const DropdownLatest = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className={`text-md font-semibold focus:outline-none rounded-lg py-2.5 text-center inline-flex items-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
        type="button"
      >
        Newest
        <svg
          className={`w-2.5 h-2.5 ms-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
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
                className={`block px-4 py-2 ${isDarkMode ? 'hover:bg-gray-600 hover:text-white' : 'hover:bg-gray-100'}`}
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block px-4 py-2 ${isDarkMode ? 'hover:bg-gray-600 hover:text-white' : 'hover:bg-gray-100'}`}
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block px-4 py-2 ${isDarkMode ? 'hover:bg-gray-600 hover:text-white' : 'hover:bg-gray-100'}`}
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block px-4 py-2 ${isDarkMode ? 'hover:bg-gray-600 hover:text-white' : 'hover:bg-gray-100'}`}
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

export default DropdownLatest;
