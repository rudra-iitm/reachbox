import React from 'react';
import send from '../assets/send.svg';

enum Status {
  Interested = 'Interested',
  Closed = 'Closed',
  Pending = 'Pending',
}

interface WrapperProps {
  email: string;
  subject: string;
  campaign: string;
  date: string;
  status: Status;
  isDarkMode: boolean;
}

const Wrapper = (props: WrapperProps) => {
  return (
    <div
      className={`border-y mx-5 w-full py-4 px-2 hover:border-l-2 ${props.isDarkMode ? 'border-gray-700 hover:border-l-[#626FE6]' : 'border-gray-300 hover:border-l-blue-600'}`}
    >
      <div className="flex justify-between items-center">
        <div className={`font-semibold text-lg ${props.isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {props.email}
        </div>
        <div className={`${props.isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {props.date}
        </div>
      </div>
      <div className={`font-light text-md py-2 truncate ${props.isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
        {props.subject}
      </div>
      <div className="flex items-center gap-2">
        <StatusCard status={props.status} isDarkMode={props.isDarkMode} />
        <CampaignCard campaign={props.campaign} isDarkMode={props.isDarkMode} />
      </div>
    </div>
  );
};

const StatusCard = ({ status, isDarkMode }: { status: Status; isDarkMode: boolean }) => {
  const textColor =
    status === Status.Interested
      ? 'text-[#57E0A6]'
      : status === Status.Closed
      ? 'text-[#626FE6]'
      : 'text-yellow-500';

  const bgColor =
    status === Status.Interested
      ? 'bg-[#57E0A6]'
      : status === Status.Closed
      ? 'bg-[#626FE6]'
      : 'bg-yellow-500';

  return (
    <div className={`rounded-full text-sm px-3 py-1 flex items-center gap-2 ${isDarkMode ? 'bg-[#222426] text-gray-100' : 'bg-gray-200 text-gray-700'} ${textColor}`}>
      <span className={`h-[12px] w-[12px] border-2 rounded-full ${bgColor}`}></span>
      {status}
    </div>
  );
};

const CampaignCard = ({ campaign, isDarkMode }: { campaign: string; isDarkMode: boolean }) => {
  return (
    <div className={`flex items-center gap-1 text-sm rounded-full px-3 py-1 ${isDarkMode ? 'bg-[#222426] text-gray-100' : 'bg-gray-200 text-gray-700'}`}>
      <img className="w-5 h-5" src={send} alt="Send icon" />
      {campaign}
    </div>
  );
};

export default Wrapper;
