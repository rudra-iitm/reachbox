import React from 'react';
import home from '../assets/home.svg';
import user from '../assets/user.svg';
import email from '../assets/email.svg';
import send from '../assets/send.svg';
import menu from '../assets/menu.svg';
import inbox from '../assets/inbox.svg';
import barchart from '../assets/barchart.svg';
import mainlogo from '../assets/mainlogo.svg';
import mainlogo_light from '../assets/mainlogo_light.svg';

const Sidebar = ({ setTab, isDarkMode }: { setTab: (name: string) => void; isDarkMode: boolean }) => {
  return (
    <div className={`${isDarkMode ? 'bg-[#101113] text-neutral-400' : 'bg-white text-gray-500 border border-gray-500'}`}>
      <div className={`hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-[56px] ${isDarkMode ? 'bg-[#101113] border-neutral-700' : 'bg-white border border-gray-300'} lg:block lg:translate-x-0 lg:end-auto lg:bottom-0`}>
        <div className="flex flex-col justify-center items-center gap-y-2 py-4 h-full">
          <div className="mb-16">
            <a className="flex-none focus:outline-none focus:opacity-80" href="#">
              {isDarkMode && <img className="w-[32px] h-[32px]" src={mainlogo} alt="Logo" />}
              {!isDarkMode && <img className="w-[32px] h-[32px]" src={mainlogo_light} alt="Logo" />}
            </a>
          </div>
          {[
            { name: 'Home', icon: home },
            { name: 'User', icon: user },
            { name: 'Email', icon: email },
            { name: 'Send', icon: send },
            { name: 'Menu', icon: menu },
            { name: 'Inbox', icon: inbox },
            { name: 'Barchart', icon: barchart },
          ].map((item) => (
            <div key={item.name} className="hs-tooltip [--placement:right] inline-block mb-2">
              <button
                onClick={() => setTab(item.name)}
                type="button"
                className={`hs-tooltip-toggle size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent ${
                  isDarkMode ? 'text-neutral-400 hover:bg-neutral-700 focus:bg-neutral-700' : 'text-gray-500 hover:bg-gray-100 focus:bg-gray-100'
                }`}
              >
                <img src={item.icon} alt={item.name} />
                <span
                  className={`hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 ${
                    isDarkMode ? 'bg-neutral-700 text-white' : 'bg-gray-900 text-white'
                  } rounded-lg whitespace-nowrap`}
                  role="tooltip"
                >
                  {item.name}
                </span>
              </button>
            </div>
          ))}

          <div className="mt-auto">
            <div className={`w-8 h-8 flex items-center justify-center rounded-full ${isDarkMode ? 'bg-green-800 text-white' : 'bg-green-500 text-white'}`}>
              AS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
