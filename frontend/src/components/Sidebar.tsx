import React from 'react';
import home from '../assets/home.svg';
import user from '../assets/user.svg';
import email from '../assets/email.svg';
import send from '../assets/send.svg';
import menu from '../assets/menu.svg';
import inbox from '../assets/inbox.svg';
import barchart from '../assets/barchart.svg';
import mainlogo from '../assets/mainlogo.svg';

const Sidebar = () => {
  return (
    <div className='bg-[#101113]'>
      <div className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-[56px] bg-[#101113] border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-track]:bg-[#101113] [&::-webkit-scrollbar-thumb]:bg-[#101113] dark:[&::-webkit-scrollbar-track]:bg-[#101113] dark:[&::-webkit-scrollbar-thumb]:bg-[#101113] dark:bg-[#101113] dark:border-neutral-700" role="dialog" tabindex="-1" aria-label="Mini Sidebar">
        <div className="flex flex-col justify-center items-center gap-y-2 py-4 h-full">
          <div className="mb-16">
            <a className="flex-none focus:outline-none focus:opacity-80" href="#">
              <img className="w-[32px] h-[32px]" src={mainlogo} />
            </a>
          </div>
          <div className="hs-tooltip [--placement:right] inline-block mb-2">
            <button type="button" className="hs-tooltip-toggle size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
              <img src={home} alt="" />
              <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700" role="tooltip">
                Home
              </span>
            </button>
          </div>
          <div className="hs-tooltip [--placement:right] inline-block mb-2">
            <button type="button" className="hs-tooltip-toggle size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
              <img src={user} alt="" />
              <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700" role="tooltip">
                User
              </span>
            </button>
          </div>
          <div className="hs-tooltip [--placement:right] inline-block mb-2">
            <button type="button" className="hs-tooltip-toggle size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
              <img src={email} alt="" />
              <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700" role="tooltip">
                Email
              </span>
            </button>
          </div>
          <div className="hs-tooltip [--placement:right] inline-block mb-2">
            <button type="button" className="hs-tooltip-toggle size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
              <img src={send} alt="" />
              <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700" role="tooltip">
                Send
              </span>
            </button>
          </div>
          <div className="hs-tooltip [--placement:right] inline-block mb-2">
            <button type="button" className="hs-tooltip-toggle size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
              <img src={menu} alt="" />
              <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700" role="tooltip">
                Menu
              </span>
            </button>
          </div>
          <div className="hs-tooltip [--placement:right] inline-block mb-2">
            <button type="button" className="hs-tooltip-toggle size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
              <img src={inbox} alt="" />
              <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700" role="tooltip">
                Inbox
              </span>
            </button>
          </div>
          <div className="hs-tooltip [--placement:right] inline-block">
            <button type="button" className="hs-tooltip-toggle size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
              <img src={barchart} alt="" />
              <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700" role="tooltip">
                Barchart
              </span>
            </button>
          </div>
          <div className="mt-auto">
            <div className='w-8 h-8 flex items-center justify-center rounded-full bg-green-800 text-white'>
              AS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
