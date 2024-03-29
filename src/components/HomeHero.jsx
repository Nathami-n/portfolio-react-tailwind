import { motion } from "framer-motion";
import {FaGithub, FaLinkedinIn} from 'react-icons/fa6'
import { CiStar, CiTwitter, CiYoutube } from "react-icons/ci";
import { Link } from "react-router-dom";
const rotateVariants = {
  rotateStar: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 4,
      ease: "linear",
    },
  },
};
const HomeHero = () => {
  return (
    <section className="min-h-screen max-md:p-6">
      <div className=" max-lg:flex max-lg:flex-col items-center lg:gap-[40px] lg:grid lg:grid-cols-12 lg:px-4 mt-8 gap-11">
       <Link className=" bg-red-400 relative  max-lg:max-w-[750px] max-lg:max-h-[400px] lg:w-[95%] lg:h-[600px]  lg:col-span-6 lg:ml-[40px] card overflow-hidden grid place-content-center " to='/about'>
       <div >
       <img
          src="/daark.jpg"
          alt="Hero Image"
          className="object-cover w-full mix-blend-color-dodge"
        />
          <motion.div className="absolute  top-[75%] right-[3%]">
            <motion.div
              variants={rotateVariants}
              animate="rotateStar"
              className=" text-[60px] text-white rotate-center p-3"
            >
              <CiStar className="bg-[#f75c2d]  rounded-full p-2 " />
            </motion.div>
          </motion.div>
        </div>
       </Link>
        <div className="text-white  lg:ml-[50px] lg:w-[90%] lg:h-[600px]  w-[98%] lg:col-span-6  lg:mr-12 gap-10 bg-bgcard rounded-2xl flex flex-col p-8 justify-center items-center">
          <h1 className="font-bold text-4xl">
            Hello, I&apos;m <span className="text-[#f75c2d]">Nathan</span>
          </h1>
          <p className="text-[#cdcdcd]">
            &#8212; A tech oriented enthusiasit who is characterised by avid and
            constant devouring of new and existing technologies. I am well
            versed in both front-end and back-end technologies{" "}
          </p>
          <div className="
          lg:justify-start
          w-full
          lg:gap-10
          p-3
          flex
          justify-between
          items-center
          sm:gap-2
          md:justify-start
          md:gap-[40px]
          gap-3
          ">
            <div className="
            rounded-full
            border
            p-2
            hover:border-neutral-600
            transition
            "><FaLinkedinIn size={20} className="icon"/></div>
           <div className="
            rounded-full
            border
            p-2
            hover:border-neutral-600
            transition
            "> <FaGithub  size={20} className="icon"/> </div>
           <div className="
            rounded-full
            border
            p-2
            hover:border-neutral-600
            transition
            "> <CiTwitter size={20}  className="icon"/> </div>
           <div className="
            rounded-full
            border
            p-2
            hover:border-neutral-600
            transition
            "> <CiYoutube  size={20} className="icon"/> </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
