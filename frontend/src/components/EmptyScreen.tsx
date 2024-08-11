import React from 'react';
import empty from '../assets/empty.svg';

const EmptyScreen = ({ isDarkMode }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center">
      <img src={empty} alt="Empty" className="w-[180.02px] h-[229.4px] mb-4" />
      <div className={`text-xl font-semibold mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        It's the beginning of a legendary sales pipeline
      </div>
      <div className={`w-[250px] ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        When you have inbound E-mails you'll see them here
      </div>
    </div>
  );
}

export default EmptyScreen;
