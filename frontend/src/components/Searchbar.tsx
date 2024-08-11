import React from 'react';
import DropdownLatest from './DropdownLatest';

const Searchbar = ({ totalInboxes, isDarkMode }: { totalInboxes: number, isDarkMode: boolean }) => {
  return (
    <div>
      <div className="px-5 pt-4 p-2 relative mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg 
              className={`h-3 w-3 fill-current ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} 
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink" 
              viewBox="0 0 56.966 56.966" 
              xmlSpace="preserve"
              width="512px" 
              height="512px"
            >
              <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  
                  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  
                  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  
                  s-17-7.626-17-17S14.61,6,23.984,6z" 
              />
            </svg>
          </div>
          <input
            className={`h-[28px] pl-10 pr-16 rounded-lg text-sm focus:outline-none ${isDarkMode ? 'bg-[#23272C] text-white' : 'bg-gray-200 text-black'}`}
            type="search"
            name="search"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="p-5 flex items-center gap-2">
        <div className={`h-8 w-8 flex justify-center items-center rounded-full ${isDarkMode ? 'bg-[#222426] text-[#5C7CFA]' : 'bg-gray-300 text-blue-500'}`}>
          {totalInboxes}
        </div>
        <div className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          New Replies
        </div>
        <div className="ml-4">
          <DropdownLatest isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
