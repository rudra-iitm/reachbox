import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import EmptyScreen from '../components/EmptyScreen';
import Inbox from '../components/Inbox';
import EmailComponent from '../components/Email';

const OneBox = () => {
  const [currentThread, setCurrentThread] = React.useState('');
  const [tab, setTab] = React.useState('home');

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <div className="w-[56px]">
        <Sidebar setTab={setTab}/>
      </div>
      <div className="w-full flex flex-col">
        <div className="sticky top-0 z-10 border-b border-gray-500">
          <Navbar />
        </div>
        <div className="flex flex-grow overflow-hidden">
          <div className="bg-[#000000] flex-grow overflow-hidden">
            {/* <EmptyScreen /> */}
            {tab == 'Inbox' ? <Inbox setCurrentThread={setCurrentThread}/> : <EmptyScreen />}
          </div>
          <div className={`overflow-hidden ${tab != 'Inbox' ? 'hidden' : ''}`}>
            <EmailComponent thread_id={currentThread}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OneBox;
