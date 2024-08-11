import React, { useEffect, useState } from 'react';
import { FaPaperPlane, FaRegEnvelope, FaCheckCircle } from 'react-icons/fa';
import email2 from '../assets/email2.svg';
import reply from '../assets/reply.svg';
import DropdownStatus from './DropdownStatus';
import DropdownMove from './DropdownMove';
import DropdownMenu from './DropdownMenu';
import EmailReply from './EmailReply';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const EmailComponent = ({ thread_id, isDarkMode }: { thread_id: string, isDarkMode: boolean }) => {
  const [isReplyVisible, setIsReplyVisible] = useState(false);

  const handleReplyClick = () => {
    setIsReplyVisible((prev) => !prev);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'r' || event.key === 'R') {
      event.preventDefault();
      handleReplyClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  interface EmailData {
    toEmail: string;
    cc: string | null;
    body: string;
    fromName: string;
    subject: string;
    fromEmail: string;
  }

  const [data, setData] = useState<EmailData>({ fromName: '', subject: '', body: '', fromEmail: '', toEmail: '', cc: '' });
  const [token, setToken] = useState('');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tokenFromUrl = params.get('token');
    console.log('Token from URL:', tokenFromUrl);
    setToken(tokenFromUrl || '');
  }, [location.search]);

  useEffect(() => {
    const fetchData = async () => {
      const baseurl = `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${thread_id}`;
      const headers = {
        Authorization: `Bearer ${token}`
      };

      try {
        const response = await axios.get(baseurl, { headers });
        setData(response.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    if (token) {
      console.log('Fetching data...');
      fetchData();
    }
  }, [thread_id, token]);

  return (
    <div className={`flex border-l ${isDarkMode ? 'border-gray-500' : 'border-gray-300'} min-h-screen`}>
      <div className={`flex-1 w-[780px] ${isDarkMode ? 'bg-[#000000] text-white' : 'bg-white text-gray-900'}`}>
        <div className={`flex justify-between items-center p-4 border-b ${isDarkMode ? 'border-gray-500' : 'border-gray-300'}`}>
          <div className={`${isDarkMode ? 'text-white' : 'text-black'} text-lg font-semibold`}>
            {data.fromName}
          </div>
          <div className='flex gap-4'>
            <DropdownStatus isDarkMode={isDarkMode} />
            <DropdownMove isDarkMode={isDarkMode} />
            <DropdownMenu isDarkMode={isDarkMode} />
          </div>
        </div>
        <div className={`m-8 p-4 rounded-lg ${isDarkMode ? 'bg-gray-800 border-gray-500' : 'bg-gray-100 border-gray-300'} ${thread_id === '' ? 'hidden' : ''}`}>
          <div className="flex justify-between items-center">
            <div className="mb-2 font-semibold">
              {data.subject}
            </div>
            <div className={`text-gray-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>20 June 2022 : 9:16AM</div>
          </div>
          <div className={`mb-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>from :</span> {data.fromEmail}
            <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} ml-4`}>cc :</span> {data.cc}
          </div>
          <div className={`mb-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>to :</span> {data.toEmail}
          </div>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
            {data.body}
          </p>
          <div className="mt-4">
            <button className={`text-blue-400 ${isDarkMode ? 'hover:text-blue-300' : 'hover:text-blue-500'}`}>View all 4 replies</button>
          </div>
        </div>
        <div
          className={`absolute bottom-0 flex items-center justify-center m-8 w-[136px] rounded-sm gap-2 cursor-pointer ${isReplyVisible ? "hidden" : ""}`}
          style={{
            background: "linear-gradient(180deg, #4B63DD 100%, #0524BF 99%)",
          }}
          onClick={handleReplyClick}
        >
          <img src={reply} className="w-4 h-4" alt="Reply" />
          <button className={`text-white text-sm font-medium py-2`}>Reply</button>
        </div>
        <div className={`absolute bottom-4 left-12 w-full ${!isReplyVisible ? "hidden" : ""}`}>
          <EmailReply onClick={handleReplyClick} isDarkMode={isDarkMode}/>
        </div>
      </div>
      <div className={`p-4 w-[278px] ${isDarkMode ? 'bg-[#000000] text-white border-gray-500' : 'bg-white text-black border-gray-300'} border-l`}>
        <div className={`font-semibold mb-4 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-[#454F5B]'} p-2 rounded-md px-4`}>Lead Details</div>
        <div className="mb-4 flex justify-between items-center gap-4">
          <div className={`text-gray-400 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Name</div>
          <div className="text-white">{data.fromEmail}</div>
        </div>
        <div className="mb-4 flex justify-between items-center gap-4">
          <div className={`text-gray-400 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Contact No</div>
          <div className={`${isDarkMode ? ' text-white' : ''}`}>+54-9062827869</div>
        </div>
        <div className="mb-4 flex justify-between items-center gap-4">
          <div className={`text-gray-400 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Email ID</div>
          <div className={`${isDarkMode ? ' text-white' : ''}`}>orlando@gmail.com</div>
        </div>
        <div className="mb-4 flex justify-between items-center gap-4">
          <div className={`text-gray-400 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>LinkedIn</div>
          <div className={`${isDarkMode ? 'text-white' : ''} truncate`} title="linkedin.com/in/timvadde/">linkedin.com/in/timvadde/</div>
        </div>
        <div className="mb-4 flex justify-between items-center gap-4">
          <div className={`text-gray-400 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Company Name</div>
          <div className={`${isDarkMode ? ' text-white' : ''}`}>Reachinbox</div>
        </div>
        <div>
          <div className={`font-semibold mb-4 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-[#454F5B]'} p-2 rounded-md px-4`}>Activities</div>
          <div className={`${isDarkMode ? ' text-white' : ''} mb-4 px-4 text-lg`}>Campaign Name</div>
          <div className={`${isDarkMode ? ' text-white' : ''} text-sm px-4`}>3 Steps | 5 Days in Sequence</div>
          <div className="mt-4">
            <StepItem icon={<FaPaperPlane />} text="Step 1: Email" detail="Sent 3rd, Feb" isDarkMode={isDarkMode} />
            <StepItem icon={<FaRegEnvelope />} text="Step 2: Email" detail="Opened 5th, Feb" isDarkMode={isDarkMode} />
            <StepItem icon={<FaCheckCircle />} text="Step 3: Email" detail="Opened 5th, Feb" isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>
    </div>
  );
};

const StepItem = ({ icon, text, detail, isDarkMode }: { icon: React.ReactNode, text: string, detail: string, isDarkMode: boolean }) => (
  <div className={`flex items-center gap-4 p-4 ${isDarkMode ? ' text-white' : ' text-gray-900'}`}>
    <div className={`rounded-full ${isDarkMode ? 'bg-gray-700 border-white' : 'bg-gray-200 border-gray-300'} p-1 border border-white`}>
      <img src={email2} className='w-6 h-6' alt="" />
    </div>
    <div className="flex items-center mb-4">
      <div>
        <div className={`${isDarkMode ? ' text-white' : ''}`}>{text}</div>
        <div className='flex items-center gap-2'>
          <div>{icon}</div>
          <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{detail}</div>
        </div>
      </div>
    </div>
  </div>
);

export default EmailComponent;
