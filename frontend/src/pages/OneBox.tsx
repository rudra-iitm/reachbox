import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import EmptyScreen from '../components/EmptyScreen';
import Inbox from '../components/Inbox';
import EmailComponent from '../components/Email';

const OneBox = () => {
  const [currentThread, setCurrentThread] = useState('');
  const [tab, setTab] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className={`flex h-screen w-screen overflow-hidden ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="w-[56px]">
        <Sidebar setTab={setTab} isDarkMode={isDarkMode} />
      </div>
      <div className="w-full flex flex-col">
        <div className={`sticky top-0 bg-[#343A40] z-10 border-b border-l ${isDarkMode ? 'border-gray-500' : 'border-gray-300'}`}>
          <Navbar setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
        </div>
        <div className="flex flex-grow overflow-hidden">
          <div className={`flex-grow overflow-hidden ${isDarkMode ? 'bg-[#000000]' : 'bg-white'}`}>
            {tab === 'Inbox' ? <Inbox setCurrentThread={setCurrentThread} isDarkMode={isDarkMode} /> : <EmptyScreen isDarkMode={isDarkMode}/>}
          </div>
          <div className={`overflow-hidden ${tab !== 'Inbox' ? 'hidden' : ''}`}>
            <EmailComponent thread_id={currentThread} isDarkMode={isDarkMode}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneBox;