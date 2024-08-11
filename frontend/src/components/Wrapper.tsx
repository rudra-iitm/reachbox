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
}

const Wrapper = (props: WrapperProps) => {
  return (
    <div
     className="border-y mx-5 w-full border-gray-500 py-4 px-2 hover:border-l-2 hover:border-l-[#626FE6]">
      <div className="flex justify-between items-center">
        <div className="text-white font-semibold text-lg">
          {props.email}
        </div>
        <div className="text-white">
          {props.date}
        </div>
      </div>
      <div className="text-white font-light text-md py-2 truncate">
        {props.subject}
      </div>
      <div className="flex items-center gap-2">
        <StatusCard status={props.status} />
        <CampaignCard campaign={props.campaign} />
      </div>
    </div>
  );
};

const StatusCard = ({ status }: { status: Status }) => {
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
    <div className={`rounded-full text-sm bg-[#222426] px-3 py-1 flex items-center gap-2 ${textColor}`}>
      <span className={`h-[12px] w-[12px] border-2 rounded-full ${bgColor}`}></span>
      {status}
    </div>
  );
};

const CampaignCard = ({ campaign }: { campaign: string }) => {
  return (
    <div className="flex items-center gap-1 text-white text-sm rounded-full bg-[#222426] px-3 py-1">
      <img className="w-5 h-5" src={send} alt="Send icon" />
      {campaign}
    </div>
  );
};

export default Wrapper;
