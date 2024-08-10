import React from 'react';
import empty from '../assets/empty.svg';

const EmptyScreen = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center">
      <img src={empty} alt="Empty" className="w-[180.02px] h-[229.4px] mb-4" />
      <div className="text-xl font-semibold text-white mb-12">
        It's the beginning of a legendary sales pipeline
      </div>
      <div className="text-gray-500 w-[250px]">
        When you have inbound E-mails you'll see them here
      </div>
    </div>
  );
}

export default EmptyScreen;
