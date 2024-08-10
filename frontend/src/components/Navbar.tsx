import React from 'react';
import onebox from '../assets/onebox.svg';
import Dropdown from './Dropdown';
import Mode from './Toggle';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-[64px] bg-[#1F1F1F'>
      <div className='px-12'>
        <img src={onebox} alt='OneBox' />
      </div>
      <div className='flex items-center space-x-4'>
        <Mode />
        <Dropdown />
      </div>
    </div>
  );
};

export default Navbar;
