import React, { useState } from "react";
import close from "../assets/close.svg";
import close_light from "../assets/close_light.svg";
import DropdownSend from "./DropdownSend";
import Toolbar from "./Toolbar";

function EmailReply({ onClick, isDarkMode }: { onClick: () => void, isDarkMode: boolean }) {
  const [data, setData] = useState({
    from: "peter@reachinbox.com",
    to: "jeanne@icloud.com",
    subject: "Warmup Welcome",
    body: "Hi Jeanne,"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div
      className={`max-w-[752px] min-h-[534px] border mx-auto rounded-md text-white ${isDarkMode ? 'bg-[#141517] border-gray-500' : 'bg-white border-gray-300'}`}
    >
      <div
        className={`flex items-center justify-between px-6 py-2 ${isDarkMode ? 'bg-[#41464B]' : 'bg-gray-100'}`}
      >
        <div className={`${isDarkMode ? 'text-white' : 'text-black'}`}>Reply</div>
        <button onClick={onClick}>
          {isDarkMode && <img src={close} alt="Close icon" />}
          {!isDarkMode && <img src={close_light} alt="Close icon" />}
        </button>
      </div>
      <div className={`border-b flex items-center px-6 ${isDarkMode ? 'border-gray-500' : 'border-gray-300'}`}>
        <label className={`text-sm font-medium ${isDarkMode ? 'text-[#BAB9BD]' : 'text-gray-700'}`}>To:</label>
        <input
          type="email"
          name="to"
          value={data.to}
          onChange={handleInputChange}
          className={`w-full p-2 mt-1 rounded-md border-none focus:outline-none ${isDarkMode ? 'bg-[#141517] text-white' : 'bg-white text-black'}`}
        />
      </div>
      <div className={`border-b flex items-center px-6 ${isDarkMode ? 'border-gray-500' : 'border-gray-300'}`}>
        <label className={`text-sm font-medium ${isDarkMode ? 'text-[#BAB9BD]' : 'text-gray-700'}`}>From:</label>
        <input
          type="email"
          name="from"
          value={data.from}
          onChange={handleInputChange}
          className={`w-full p-2 mt-1 rounded-md border-none focus:outline-none ${isDarkMode ? 'bg-[#141517] text-white' : 'bg-white text-black'}`}
        />
      </div>
      <div className={`border-b flex items-center px-6 ${isDarkMode ? 'border-gray-500' : 'border-gray-300'}`}>
        <label className={`text-sm font-medium ${isDarkMode ? 'text-[#BAB9BD]' : 'text-gray-700'}`}>Subject:</label>
        <input
          type="text"
          name="subject"
          value={data.subject}
          onChange={handleInputChange}
          className={`w-full p-2 mt-1 rounded-md border-none focus:outline-none ${isDarkMode ? 'bg-[#141517] text-white' : 'bg-white text-black'}`}
        />
      </div>
      <div className={`border-b ${isDarkMode ? 'border-gray-500' : 'border-gray-300'}`}>
        <div className="px-6">
          <textarea
            name="body"
            value={data.body}
            onChange={handleInputChange}
            className={`w-full p-2 mt-1 h-72 rounded-md border-none focus:outline-none ${isDarkMode ? 'bg-[#141517] text-white' : 'bg-white text-black'}`}
          />
        </div>
      </div>
      <div className="flex">
        <DropdownSend isDarkMode={isDarkMode} />
        <Toolbar isDarkMode={isDarkMode}/>
      </div>
    </div>
  );
}

export default EmailReply;
