import React, { useState } from 'react';

const DropdownInbox = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className={`text-xl font-semibold focus:outline-none rounded-lg px-5 py-2.5 text-center inline-flex items-center ${isDarkMode ? 'text-[#5C7CFA]' : 'text-[#4285F4]'}`}
        type="button"
      >
        All Inbox(s)
        <svg
          className={`w-2.5 h-2.5 ms-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
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
          className={`z-10 absolute right-0 mt-2 divide-y divide-gray-100 rounded-lg shadow w-44 ${isDarkMode ? 'bg-gray-700 divide-gray-600' : 'bg-white divide-gray-100'}`}
        >
          <ul
            className={`py-2 text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${isDarkMode ? 'dark:hover:bg-gray-600 dark:hover:text-white' : 'hover:bg-gray-100 hover:text-gray-900'}`}
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${isDarkMode ? 'dark:hover:bg-gray-600 dark:hover:text-white' : 'hover:bg-gray-100 hover:text-gray-900'}`}
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${isDarkMode ? 'dark:hover:bg-gray-600 dark:hover:text-white' : 'hover:bg-gray-100 hover:text-gray-900'}`}
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${isDarkMode ? 'dark:hover:bg-gray-600 dark:hover:text-white' : 'hover:bg-gray-100 hover:text-gray-900'}`}
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

export default DropdownInbox;
