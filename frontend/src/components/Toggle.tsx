import React, { useState } from 'react';
import darkmode from '../assets/darkmode.svg';
import lightmode from '../assets/lightmode.svg';

const Mode = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className='themeSwitcherThree relative inline-flex cursor-pointer select-none items-center'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={handleCheckboxChange}
          className='sr-only'
        />
        <div className='shadow-card flex items-center justify-center rounded-full border border-gray-500'>
          <span
            className={`flex items-center justify-center rounded-full p-1 ml-2 ${
              !isChecked ? 'bg-primary text-white' : 'text-body-color'
            }`}
          >
            <img src={darkmode} alt='Dark Mode' />
          </span>
          <span
            className={`flex items-center justify-center rounded-full p-1 mr-2 ${
              isChecked ? 'bg-primary text-white' : 'text-body-color'
            }`}
          >
            <img src={lightmode} alt='Light Mode' />
          </span>
        </div>
      </label>
    </>
  );
};

export default Mode;
