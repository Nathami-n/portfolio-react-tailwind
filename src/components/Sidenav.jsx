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
  };
  return (
    <>
      <div>
        <AiOutlineMenu
          className=" absolute top-4 right-2 inline md:hidden z-[999]"
          onClick={handleNav}
        />
      </div>
      <div>
        {navIcon ? (
          <div className="w-full h-screen bg-[#ffffff] fixed  z-20 md:hidden flex flex-col justify-center items-center gap-3">
            <div className="cursor-pointer border-2 rounded-full shadow-md bg-gray-100  shadow-gray-400  w-[65%] flex justify-center py-3 hover:scale-y-105 ">
             <a onClick={handleNav} className="w-[100%] flex row justify-center gap-2" href="/"> <AiOutlineHome size={20} /> Home </a>
            </div>
            <div className="cursor-pointer border-2 rounded-full shadow-md bg-gray-100  shadow-gray-400 w-[65%] flex justify-center py-3 hover:scale-y-105 ">
              <a onClick={handleNav} className=" w-[100%] flex row justify-center gap-2" href="#about"><VscAccount size={20} /> About</a>
            </div>
            <div className="cursor-pointer border-2 rounded-full shadow-md bg-gray-100  shadow-gray-400 w-[65%] flex justify-center py-3 hover:scale-y-105 ">
              <a onClick={handleNav} className="w-[100%] flex row justify-center gap-2" href=""><GrProjects size={20} /> Projects</a>
            </div>
            <div className="cursor-pointer border-2 rounded-full shadow-md bg-gray-100  shadow-gray-400 w-[65%] flex justify-center py-3 hover:scale-y-105 ">
               <a onClick={handleNav} className="w-[100%] flex row justify-center gap-2" href=""><IoMailOutline size={20} /> Contact</a>
            </div>
          </div>
        ) : (
          " "
        )}
        <div className="flex flex-col gap-3 justify-center h-screen fixed z-[99] m-2" >
            <div>
              <a href="/">
            <AiOutlineHome size={35} 
            className=" bg-gray-50 border-3  w-16 h-16 rounded-full shadow-md shadow-gray-500 p-4 hover:scale-105 md:block hidden"
            /> </a>
            </div>
            <div>
              <a href="#about">
            <VscAccount size={35} 
            className="  bg-gray-50  border-3  w-16 h-16  rounded-full shadow-md shadow-gray-500 p-4 hover:scale-105 md:block hidden"
            /> </a>
            </div>
            <div>
              <a href="">
            <GrProjects size={35} 
            className="  bg-gray-50 border-3   w-16 h-16 rounded-full shadow-md shadow-gray-500  p-4 hover:scale-105 md:block hidden"
            /> </a>
            </div>
            <div>
              <a href="">
            <IoMailOutline size={35} 
            className="  bg-gray-50  border-3  w-16 h-16  rounded-full shadow-md shadow-gray-500 p-4 hover:scale-105 md:block hidden"
            /> </a>
            </div>
        </div>
      </div>
    </>
  );
};

export default Sidenav;
