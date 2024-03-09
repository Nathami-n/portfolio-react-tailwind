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
        <div className="border-black mx-auto bg-black/30 relative flex justify-center items-center z-2">
          <ul className="p-4 flex flex-col gap-12 bottom-0  h-[360px] w-[400px] items-center fixed  rounded-xl  bg-bgcard z-10">
            <li className="nav">
              <Link>Home</Link>
            </li>
            <li className="nav">
              <Link>Work</Link>
            </li>
            <li className="nav">
              <Link>About</Link>
            </li>
            <li className="nav">
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
