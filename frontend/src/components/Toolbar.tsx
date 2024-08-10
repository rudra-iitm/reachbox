import { FiZap, FiEye, FiLink, FiImage, FiSmile, FiUser, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Toolbar = () => {
  return (
    <div className="flex items-center bg-[#141517] text-gray-300 p-2">
      <button className="p-2 hover:bg-[#141517] rounded flex gap-2">
        <FiZap size={20} />
        Variables
      </button>
      <button className="p-2 hover:bg-[#141517] rounded flex gap-2">
        <FiEye size={20} />
        Preview Email
      </button>
      <button className="p-2 hover:bg-[#141517] rounded">
        <span className="text-xl">A</span>
      </button>
      <button className="p-2 hover:bg-[#141517] rounded">
        <FiLink size={20} />
      </button>
      <button className="p-2 hover:bg-[#141517] rounded">
        <FiImage size={20} />
      </button>
      <button className="p-2 hover:bg-[#141517] rounded">
        <FiSmile size={20} />
      </button>
      <button className="p-2 hover:bg-[#141517] rounded">
        <FiUser size={20} />
      </button>
      <div className="ml-auto flex">
        <button className="p-2 hover:bg-[#141517] rounded flex">
          <FiChevronLeft size={20} />
          <FiChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;