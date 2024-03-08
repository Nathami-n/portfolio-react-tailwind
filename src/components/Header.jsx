import { useState } from "react";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import { motion } from "framer-motion";
const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav className="w-full p-4">
      <div className="flex justify-between items-center">
        <div>
          <span className="font-bold text-white text-2xl">Nathan.</span>
        </div>
        <div onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <motion.button whileTap={{ opacity: 0, x: "300px" }}>
              {" "}
              <VscMenu className="text-white text-3xl cursor-pointer" />
            </motion.button>
          ) : (
            <motion.button
              whileTap={{
                opacity: `${openNav ? 1 : 0}`,
                x: [-100, -50, -25, 0],
              }}
            >
              {" "}
              <VscChromeClose className="text-white text-3xl cursor-pointer" />
            </motion.button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
