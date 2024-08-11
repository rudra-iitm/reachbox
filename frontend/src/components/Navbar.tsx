import React from 'react';
import onebox from '../assets/onebox.svg';
import onebox_light from '../assets/onebox_light.svg';
import Dropdown from './Dropdown';
import Mode from './Toggle';

const Navbar = ({setIsDarkMode, isDarkMode}: { setIsDarkMode: (value: boolean) => void, isDarkMode: boolean }) => {
  return (
    <div className={`flex justify-between items-center h-[64px] ${ isDarkMode ? 'bg-[#1F1F1F]' : 'bg-white'}`}>
      <div className='px-12'>
        {isDarkMode && <img src={onebox} alt='OneBox' />}
        {!isDarkMode && <img src={onebox_light} alt='OneBox' />}
      </div>
      <div className='flex items-center space-x-4'>
        <Mode setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode}/>
        <Dropdown isDarkMode={isDarkMode}/>
      </div>
    </div>
  );
};

export default Navbar;
