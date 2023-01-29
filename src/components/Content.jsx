import React from "react";

const Content = () => {
  // const day = new Date().getDay

  return (
    // Outer content

    <div className="flex justify-center items-center h-screen font-body tracking-widest ">
      <div className="bg-sky-500 w-[40vw] rounded-lg pt-8 px-8 pb-5 relative">
        <div className="flex justify-between opacity-60">
          <img src="/img/menu.png" alt="menu-button" className="w-5" />
          <img src="/img/cross.png" alt="cross-button" className="w-5" />
        </div>
        <div className="py-8 uppercase">
          <p className="text-white opacity-60">timer</p>
          <p className="text-white font-bold text-2xl">Personal Project</p>
        </div>

        {/* Inner content */}
        <div className="relative left-0 right-0 top-0 bottom-0  w-[40rem] h-36 bg-white rounded-3xl">
          {/* <div className="w-[40rem] h-36 bg-white rounded-3xl text-center"> */}
          <p>2</p>
          <p>13</p>
          <p>35</p>
          <p>15</p>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Content;
