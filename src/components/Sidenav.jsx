import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineHome } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { IoMailOutline } from "react-icons/io5";
import { GrProjects } from "react-icons/gr";
const Sidenav = () => {
  const [navIcon, setNavIcon] = useState(false);
  const handleNav = () => {
    setNavIcon((prevState) => {
      return !prevState;
    });
    console.log("I was clicked");
  };
  return (
    <>
      <div>
        <AiOutlineMenu
          className=" absolute top-4 right-2 inline md:hidden "
          onClick={handleNav}
        />
      </div>
      <div>
        {navIcon ? (
          <div className="flex flex-col gap-y-3 justify-center items-center h-screen w-100  md:hidden">
            <div className=" border-2 rounded-full shadow-md bg-gray-100  shadow-gray-400  w-[65%] flex justify-center py-3 hover:scale-y-105 ">
              <AiOutlineHome size={20} />
            </div>
            <div className=" border-2 rounded-full shadow-md bg-gray-100  shadow-gray-400 w-[65%] flex justify-center py-3 hover:scale-y-105 ">
              <VscAccount size={20} />
            </div>
            <div className=" border-2 rounded-full shadow-md bg-gray-100  shadow-gray-400 w-[65%] flex justify-center py-3 hover:scale-y-105 ">
              <GrProjects size={20} />
            </div>
            <div className=" border-2 rounded-full shadow-md bg-gray-100  shadow-gray-400 w-[65%] flex justify-center py-3 hover:scale-y-105 ">
              <IoMailOutline size={20} />
            </div>
          </div>
        ) : (
          " "
        )}
      </div>
    </>
  );
};

export default Sidenav;
