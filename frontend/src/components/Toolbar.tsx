import React from 'react';
import { FiZap, FiEye, FiLink, FiImage, FiSmile, FiUser, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Toolbar = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <div className={`flex items-center p-2 ${isDarkMode ? 'bg-[#141517] text-gray-300' : 'bg-white text-gray-800'}`}>
      <button className={`p-2 hover:bg-opacity-30 rounded flex gap-2 ${isDarkMode ? 'hover:bg-[#1F1F1F]' : 'hover:bg-gray-200'}`}>
        <FiZap size={20} />
        Variables
      </button>
      <button className={`p-2 hover:bg-opacity-30 rounded flex gap-2 ${isDarkMode ? 'hover:bg-[#1F1F1F]' : 'hover:bg-gray-200'}`}>
        <FiEye size={20} />
        Preview Email
      </button>
      <button className={`p-2 hover:bg-opacity-30 rounded ${isDarkMode ? 'hover:bg-[#1F1F1F]' : 'hover:bg-gray-200'}`}>
        <span className="text-xl">A</span>
      </button>
      <button className={`p-2 hover:bg-opacity-30 rounded ${isDarkMode ? 'hover:bg-[#1F1F1F]' : 'hover:bg-gray-200'}`}>
        <FiLink size={20} />
      </button>
      <button className={`p-2 hover:bg-opacity-30 rounded ${isDarkMode ? 'hover:bg-[#1F1F1F]' : 'hover:bg-gray-200'}`}>
        <FiImage size={20} />
      </button>
      <button className={`p-2 hover:bg-opacity-30 rounded ${isDarkMode ? 'hover:bg-[#1F1F1F]' : 'hover:bg-gray-200'}`}>
        <FiSmile size={20} />
      </button>
      <button className={`p-2 hover:bg-opacity-30 rounded ${isDarkMode ? 'hover:bg-[#1F1F1F]' : 'hover:bg-gray-200'}`}>
        <FiUser size={20} />
      </button>
      <div className="ml-auto flex">
        <button className={`p-2 hover:bg-opacity-30 rounded flex ${isDarkMode ? 'hover:bg-[#1F1F1F]' : 'hover:bg-gray-200'}`}>
          <FiChevronLeft size={20} />
          <FiChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
