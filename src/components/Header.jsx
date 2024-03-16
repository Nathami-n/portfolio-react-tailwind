import { useState } from "react";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <div className="w-full ">
      <nav className="w-full p-5">
        <div className="flex justify-between items-center">
          <div>
            <span className="font-bold text-white text-2xl">Nathan.</span>
          </div>
          <motion.button onClick={() => setOpenNav(!openNav)}>
            {!openNav ? (
              <VscMenu className="text-white text-3xl cursor-pointer" />
            ) : (
              <VscChromeClose className="text-white text-3xl cursor-pointer" />
            )}
          </motion.button>
        </div>
      </nav>
      {openNav && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            ease: "easeInOut",
          }}
          onClick={() => setOpenNav(!openNav)}
          className="border-black  relative flex justify-center items-center z-[99]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-black/50 w-full h-screen fixed inset-0 cursor-pointer"
          />
          <ul className="p-12 flex flex-col gap-12  max-md:top-[20%] h-[400px] max-md:w-full items-center fixed  rounded-3xl  bg-bgcard  md:top-[60px] md:w-[500px] md:right-[40px]">
            <li className="nav">
              <Link to='/'>Home</Link>
            </li>
            <li className="nav">
              <Link to='/work'>Work</Link>
            </li>
            <li className="nav">
              <Link to='/about'>About</Link>
            </li>
            <li className="nav">
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Header;
