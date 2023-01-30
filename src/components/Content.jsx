import React from "react";

const Content = () => {
  return (
    <div className="flex justify-center items-center h-screen font-body tracking-widest">
      <div className="bg-sky-500 w-[40vw] rounded-lg pt-8 px-8 pb-5 relative">
        <div className="flex justify-between opacity-60">
          <img src="/img/menu.png" alt="menu-button" className="w-5" />
          <img src="/img/cross.png" alt="cross-button" className="w-5" />
        </div>
        <div className="py-8 uppercase">
          <p className="text-white opacity-60">timer</p>
          <p className="text-white font-bold text-2xl">Personal Project</p>
        </div>
        <div className="relative w-[40rem] h-36 bg-white rounded-3xl left-[50%] -translate-x-[50%]">
          <div className="flex p-4">
            <p>2</p>
            <p>13</p>
            <p>35</p>
            <p>15</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
