import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import EmptyScreen from '../components/EmptyScreen';

const OneBox = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="w-[56px]">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col">
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>
        <div className="bg-black flex-grow">
          <EmptyScreen />
        </div>
      </div>
    </div>
  );
}

export default OneBox;
