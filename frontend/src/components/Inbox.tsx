import { useEffect, useState } from 'react';
import DropdownInbox from './DropdownInbox';
import reset from '../assets/reset.svg';
import Searchbar from './Searchbar';
import Wrapper from './Wrapper';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

enum Status {
  Interested = 'Interested',
  Closed = 'Closed',
  Pending = 'Pending',
}

const Inbox = ({ setCurrentThread, isDarkMode }: { setCurrentThread: (threadId: string) => void, isDarkMode: boolean }) => {
  const [data, setData] = useState<{ fromEmail: string; subject: string; campaign: string; sentAt: string; status: Status; threadId: string; }[]>([]);
  const [token, setToken] = useState('');
  const [totalInboxes, setTotalInboxes] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedInboxes, setSelectedInboxes] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tokenFromUrl = params.get('token');
    setToken(tokenFromUrl || '');
  }, [location.search]);

  useEffect(() => {
    const fetchData = async () => {
      const baseurl = 'https://hiring.reachinbox.xyz/api/v1/onebox/list';
      const headers = {
        Authorization: `Bearer ${token}`
      };

      try {
        const response = await axios.get(baseurl, { headers });
        setData(response.data);
        setTotalInboxes(response.data.length);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  const resetEmails = async () => {
    const baseurl = 'https://hiring.reachinbox.xyz/api/v1/onebox/reset';
    const headers = {
      Authorization: `Bearer ${token}`
    };

    try {
      await axios.post(baseurl, {}, { headers });
    } catch (err) {
      console.error('Error resetting emails:', err);
    }
  };

  return (
    <div className={`h-full ${isDarkMode ? 'bg-[#000000]' : 'bg-white'}`}>
      <div className='w-full flex justify-between items-center p-2'>
        <DropdownInbox isDarkMode={isDarkMode} />
        <div className="hs-tooltip [--placement:right] inline-block mb-2">
          <button type="button" onClick={resetEmails} className={`hs-tooltip-toggle size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent ${isDarkMode ? 'bg-[#25262B] text-neutral-400 hover:bg-neutral-700 focus:bg-neutral-700' : 'text-gray-500 hover:bg-gray-100 focus:bg-gray-100'}`}>
            <img src={reset} alt="Reset" />
            <span className={`hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 ${isDarkMode ? 'bg-neutral-700 text-white' : 'bg-gray-900 text-white'} rounded-lg whitespace-nowrap`} role="tooltip">
              Reset
            </span>
          </button>
        </div>
      </div>
      <div className={`w-full px-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        <span className={`font-medium pl-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{selectedInboxes}/{totalInboxes}</span> Inboxes selected
      </div>
      <div>
        <Searchbar totalInboxes={totalInboxes} isDarkMode={isDarkMode} />
      </div>
      <div>
        {data.map((item, index) => (
          <div onClick={() => setCurrentThread(item.threadId)} key={index}>
            <Wrapper email={item.fromEmail} subject={item.subject} campaign={item.campaign} date={item.sentAt} status={item.status} isDarkMode={isDarkMode} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inbox;
