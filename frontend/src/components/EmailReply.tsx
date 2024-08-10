import React from "react";
import close from "../assets/close.svg"; // Fixed typo here
import DropdownSend from "./DropdownSend";
import Toolbar from "./Toolbar";

function EmailReply({ onClick }) {
  return (
    <div className="max-w-[752px] min-h-[534px] border border-gray-500 mx-auto bg-[#141517] rounded-md text-white">
      <div className="flex items-center justify-between bg-[#41464B] px-6 py-2">
        <div>Reply</div>
        <button onClick={onClick}>
          <img src={close} alt="Close icon" />
        </button>
      </div>
      <div className="border-b border-gray-500 flex items-center px-6">
        <label className="text-sm font-medium text-[#BAB9BD]">To:</label>
        <input
          type="email"
          value="jeanne@icloud.com"
          readOnly
          className="w-full p-2 mt-1 bg-[#141517] rounded-md border-none focus:outline-none"
        />
      </div>
      <div className="border-b border-gray-500 flex items-center px-6">
        <label className="text-sm font-medium text-[#BAB9BD]">From:</label>
        <input
          type="email"
          value="peter@reachinbox.com"
          readOnly
          className="w-full p-2 mt-1 bg-[#141517] rounded-md border-none focus:outline-none"
        />
      </div>
      <div className="border-b border-gray-500 flex items-center px-6">
        <label className="text-sm font-medium text-[#BAB9BD]">Subject:</label>
        <input
          type="text"
          value="Warmup Welcome"
          readOnly
          className="w-full p-2 mt-1 bg-[#141517] rounded-md border-none focus:outline-none"
        />
      </div>
      <div className="border-b border-gray-500">
        <div className="px-6">
          <textarea
            placeholder="Hi Jeanne,"
            className="w-full p-2 mt-1 bg-[#141517] rounded-md h-72 border-none focus:outline-none"
          />
        </div>
      </div>
      <div className="flex">
        <DropdownSend />
        <Toolbar />
      </div>
    </div>
  );
}

export default EmailReply;
