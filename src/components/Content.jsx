import React from "react";
import { useState } from "react";

const Content = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, h: 0, d: 0 });

  const handleClick = () => {};

  return (
    <div className="flex justify-center items-center h-screen font-body tracking-wider">
      <div className="bg-sky-500 w-[35vw] rounded-lg pt-8 px-8 relative ">
        <div className="flex justify-between opacity-60">
          <img src="/img/menu.png" alt="menu-button" className="w-5" />
          <img src="/img/cross.png" alt="cross-button" className="w-5" />
        </div>

        <div className="py-8 uppercase">
          <p className="text-white opacity-60">timer</p>
          <p className="text-white font-bold text-2xl">Personal Project</p>
        </div>

        <div className="relative w-[32rem] h-36 bg-white rounded-xl left-[50%] -translate-x-[50%] px-12 py-8">
          <div className="flex text-5xl gap-16 w-[100%]">
            <div className="flex flex-col items-center gap-1">
              <p>{day}</p>
              <p className="text-gray-400 font-medium opacity-75 text-sm">
                DAYS
              </p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p>{hour}</p>
              <p className="text-gray-400 font-medium opacity-75 text-sm">
                HOURS
              </p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p>{min}</p>
              <p className="text-gray-400 font-medium opacity-75 text-sm">
                MINUTES
              </p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p>{sec}</p>
              <p className="text-gray-400 font-medium opacity-75 text-sm">
                SECONDS
              </p>
            </div>
          </div>

          <div className="absolute left-[50%] -translate-x-[50%] top-[7rem] ">
            <button
              className="w-16 h-16 hover:opacity-95"
              onClick={handleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#028EC7"
                stroke="#028EC7"
                strokeWidth="0.6"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                />

                <path
                  strokeLinecap="round"
                  stroke="#fff"
                  strokeLinejoin="round"
                  d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="py-3 uppercase">
          <p className="text-white opacity-60">delete project</p>
        </div>
      </div>
    </div>
  );
};

export default Content;
