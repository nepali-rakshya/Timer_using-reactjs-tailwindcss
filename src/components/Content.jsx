import React from "react";

const Content = () => {
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
          <div className="flex text-5xl">
            <p>2</p>
            <p>13</p>
            <p>35</p>
            <p>15</p>
          </div>
          <div className="absolute left-[50%] -translate-x-[50%] top-[7.4rem]">
            <button className="bg-white rounded-full ">
              <img src="/img/play.png" alt="play-button" />
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
