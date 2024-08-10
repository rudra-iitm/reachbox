import React, { useState } from 'react';
import { FaPaperPlane, FaRegEnvelope, FaCheckCircle } from 'react-icons/fa';
import email2 from '../assets/email2.svg';
import reply from '../assets/reply.svg';
import DropdownStatus from './DropdownStatus';
import DropdownMove from './DropdownMove';
import DropdownMenu from './DropdownMenu';
import EmailReply from './EmailReply';

const EmailComponent = () => {
  // State to manage the visibility of the EmailReply component
  const [isReplyVisible, setIsReplyVisible] = useState(false);

  // Function to toggle the visibility of EmailReply component
  const handleReplyClick = () => {
    setIsReplyVisible((prev) => !prev);
  };

  return (
    <div className="ml-9 flex border-l border-gray-500 min-h-screen">
      {/* Main Content */}
      <div className="flex-1">
        <div className="flex justify-between items-center p-4 border-b border-gray-500">
          <div className="text-white text-lg font-semibold">
            Orlando
          </div>
          <div className='flex gap-4'>
              <DropdownStatus />
              <DropdownMove />
              <DropdownMenu />
          </div>
        </div>
        <div className="bg-[#141517] border border-gray-500 m-8 p-4 rounded-lg text-white">
          <div className="flex justify-between items-center">
            <div className="mb-2 text-white font-semibold">
              New Product Launch
            </div>
            <div className="text-gray-500">20 June 2022 : 9:16AM</div>
          </div>
          <div className="mb-2 text-sm text-gray-400">
            <span className="text-gray-400">from :</span> jeanne@icloud.com 
            <span className="text-gray-400 ml-4">cc :</span> lennon.j@mail.com
          </div>
          <div className="mb-2 text-sm text-gray-400">
            <span className="text-gray-400">to :</span> lennon.j@mail.com
          </div>
          <p className="text-gray-300">
            I would like to introduce you to SaaSgrow, a productized design service specifically tailored for SaaS startups. Our aim is to help you enhance the user experience and boost the visual appeal of your software products.
          </p>
          <div className="mt-4">
            <button className="text-blue-400">View all 4 replies</button>
          </div>
        </div>
        <div
            className={`absolute bottom-0 flex items-center justify-center m-8 w-[136px] rounded-sm gap-2 cursor-pointer ${isReplyVisible ? "hidden" : ""}`}
            style={{
                background: "linear-gradient(180deg, #4B63DD 100%, #0524BF 99%)",
            }}
            onClick={handleReplyClick} // Toggle reply visibility on click
        >
            <img src={reply} className="w-4 h-4" alt="Reply" />
            <button className="text-white text-sm font-medium py-2">Reply</button>
        </div>
        <div className={`absolute bottom-4 left-12 w-full ${!isReplyVisible ? "hidden" : ""}`}>
            <EmailReply onClick={handleReplyClick}/>
        </div>
      </div>

      {/* Lead Details */}
      <div className="p-4 w-[278px] border-l border-gray-500">
        <div className="text-white font-semibold mb-4 bg-[#23272C] p-2 rounded-md px-4">Lead Details</div>
        <div className="mb-4 flex justify-between items-center gap-4">
          <div className="text-gray-400">Name</div>
          <div className="text-white">Orlando</div>
        </div>
        <div className="mb-4 flex justify-between items-center gap-4">
          <div className="text-gray-400">Contact No</div>
          <div className="text-white">+54-9062827869</div>
        </div>
        <div className="mb-4 flex justify-between items-center gap-4">
          <div className="text-gray-400">Email ID</div>
          <div className="text-white">orlando@gmail.com</div>
        </div>
        <div className="mb-4 flex justify-between items-center gap-4">
          <div className="text-gray-400">LinkedIn</div>
          <div className="text-white truncate" title="linkedin.com/in/timvadde/">linkedin.com/in/timvadde/</div>
        </div>
        <div className="mb-4 flex justify-between items-center gap-4">
          <div className="text-gray-400">Company Name</div>
          <div className="text-white">Reachinbox</div>
        </div>
        <div>
          <div className="text-white font-semibold mb-4 bg-[#23272C] p-2 rounded-md px-4">Activities</div>
          <div className="text-white mb-4 px-4 text-lg">Campaign Name</div>
          <div className="text-white text-sm px-4">3 Steps | 5 Days in Sequence</div>
          <div className="mt-4">
            <StepItem icon={<FaPaperPlane />} text="Step 1: Email" detail="Sent 3rd, Feb" />
            <StepItem icon={<FaRegEnvelope />} text="Step 2: Email" detail="Opened 5th, Feb" />
            <StepItem icon={<FaCheckCircle />} text="Step 3: Email" detail="Opened 5th, Feb" />
          </div>
        </div>
      </div>
    </div>
  );
};

const StepItem = ({ icon, text, detail }) => (
  <div className='flex items-center gap-4 p-4'>
    <div className='rounded-full bg-[#23272C] p-1 border border-white'>
      <img src={email2} className='w-6 h-6' alt="" />
    </div>
    <div className="flex items-center mb-4">
      <div>
        <div className="text-white">{text}</div>
        <div className='flex items-center gap-2'>
          <div>{icon}</div>
          <div className="text-gray-400 text-sm">{detail}</div>
        </div>
      </div>
    </div>
  </div>
);

export default EmailComponent;
