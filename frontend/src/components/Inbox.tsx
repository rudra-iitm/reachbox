import React from 'react'
import DropdownInbox from './DropdownInbox';
import reset from '../assets/reset.svg';
import Searchbar from './Searchbar';
import Wrapper from './Wrapper';

enum Status {
    Interested = 'Interested',
    Closed = 'Closed',
    Pending = 'Pending',
  }

const Inbox = () => {
    const data = [{
        email: 'example.com',
        subject: 'Subject',
        campaign: 'Campaign',
        date: 'Date',
        status: Status.Interested
    }, {
        email: 'example2.com',
        subject: 'Subject2',
        campaign: 'Campaign2',
        date: 'Date2',
        status: Status.Closed
    }]

  return (
    <div className='w-[500px] h-full'>
        <div className='w-full flex justify-between items-center p-2'>
            <DropdownInbox />
            <div className="hs-tooltip [--placement:right] inline-block mb-2">
            <button type="button" className="bg-[#25262B] hs-tooltip-toggle size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
              <img src={reset} alt="" />
              <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700" role="tooltip">
                Reset
              </span>
            </button>
          </div>
        </div>
        <div className='w-full text-gray-400 px-5'>
            <span className='text-white font-medium pl-2'>25/25</span> Inboxes selected
        </div>
        <div>
            <Searchbar />
        </div>
        <div>
            {data.map((item, index) => (
                <Wrapper key={index} email={item.email} subject={item.subject} campaign={item.campaign} date={item.date} status={item.status} />
            ))}
        </div>
    </div>
  )
}

export default Inbox
