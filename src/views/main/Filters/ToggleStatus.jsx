import { useState } from "react";

const ToggleStatus = () => {
  const [value, setValue] = useState(false);
  return (
    <div>
      <div
        className={`relative ${
          value ? " border-[#28a745]" : " border-[#dc3545]"
        }  cursor-pointer select-none flex w-24 h-8 overflow-hidden border-2 rounded-full`}
      >
        <div
          onClick={() => setValue(!value)}
          className={`w-full  absolute flex s  ${
            value ? "left-0" : "-left-full"
          }  transition-all duration-300 h-full`}
        >
          <div className="w-[85%] text-[14px]  rounded-l-full bg-[#28a745] flex text-white font-bold justify-center items-center">
            Completo
          </div>
          <div className="w-[15%]  bg-white h-full "></div>
        </div>
        <div
          onClick={() => setValue(!value)}
          className={`w-full flex absolute ${
            value ? "-right-full" : "right-0"
          }  transition-all duration-300 h-full`}
        >
          <div className="w-[15%]  bg-white h-full "></div>
          <div className="w-[85%] text-[14px]  flex justify-center items-center rounded-r-full bg-[#dc3545] text-white font-bold ">
            Incompleto
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToggleStatus;
