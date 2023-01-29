import React from "react";

const Content = () => {
  return (
    <div className="flex justify-center items-center h-screen font-body">
      {/* width and border */}
      <div className="bg-sky-500 w-1/2 rounded-lg">
        {/* padding */}
        <div className="pt-8 px-8 pb-5">
          {/* flexbox */}
          <div className="flex justify-between opacity-60">
            <img src="/img/menu.png" alt="menu-button" className="w-5" />
            <img src="/img/cross.png" alt="cross-button" className="w-5" />
          </div>
          <div className="py-8 uppercase">
            {/* timer padding */}
            <p className="text-white opacity-60">timer</p>
            <p className="text-white ">Personal Project</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
