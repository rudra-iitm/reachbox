import React, { useState } from 'react';

const DropdownSend = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`my-2 ml-2 relative inline-block border px-4 rounded-md ${isDarkMode ? 'border-gray-500 bg-[#1F1F1F]' : 'border-gray-300 bg-gradient-to-r from-blue-400 to-blue-600'}`}
    >
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className={`text-white focus:outline-none rounded-lg py-2.5 text-center inline-flex items-center ${isDarkMode ? 'bg-[#1F1F1F]' : ''}`}
        type="button"
      >
        Send
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
          className={`z-10 absolute right-0 bottom-full mb-2 rounded-lg shadow w-44 ${isDarkMode ? 'bg-gray-700 divide-gray-600' : 'bg-white divide-gray-100'}`}
        >
          <ul
            className={`py-2 text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className={`block px-4 py-2 hover:bg-gray-100 ${isDarkMode ? 'dark:hover:bg-gray-600 dark:hover:text-white' : 'hover:bg-gray-100'}`}
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block px-4 py-2 hover:bg-gray-100 ${isDarkMode ? 'dark:hover:bg-gray-600 dark:hover:text-white' : 'hover:bg-gray-100'}`}
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block px-4 py-2 hover:bg-gray-100 ${isDarkMode ? 'dark:hover:bg-gray-600 dark:hover:text-white' : 'hover:bg-gray-100'}`}
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block px-4 py-2 hover:bg-gray-100 ${isDarkMode ? 'dark:hover:bg-gray-600 dark:hover:text-white' : 'hover:bg-gray-100'}`}
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

export default DropdownSend;
