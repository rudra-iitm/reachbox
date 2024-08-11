import React from 'react';
import darkmode from '../assets/darkmode.svg';
import lightmode from '../assets/lightmode.svg';

interface ModeProps {
  setIsDarkMode: (isDarkMode: boolean) => void;
  isDarkMode: boolean;
}

const Mode: React.FC<ModeProps> = ({ setIsDarkMode, isDarkMode }) => {
  return (
    <label className='themeSwitcherThree relative inline-flex cursor-pointer select-none items-center'>
      <div className='shadow-card flex items-center justify-center rounded-full border border-gray-500'>
        <button
          onClick={() => setIsDarkMode(true)}
          className={`flex items-center justify-center rounded-full p-1 ml-2 ${
            !isDarkMode ? 'bg-primary text-white' : 'text-body-color'
          }`}
        >
          <img src={darkmode} alt='Dark Mode' />
        </button>
        <button
          onClick={() => setIsDarkMode(false)}
          className={`flex items-center justify-center rounded-full p-1 mr-2 ${
            isDarkMode ? 'bg-primary text-white' : 'text-body-color'
          }`}
        >
          <img src={lightmode} alt='Light Mode' />
        </button>
      </div>
    </label>
  );
};

export default Mode;