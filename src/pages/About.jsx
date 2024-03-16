import {motion} from 'framer-motion';
import { CiStar } from 'react-icons/ci';
import { AboutSection } from '../components';
const About = () => {
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
  return (
    <section
      className="
  min-h-screen
  max-w-[1250px]
  mx-auto
  p-4
  "
    >
      <div
        className="
        w-full
        border
        border-gray-800
        rounded-xl
        overflow-hidden
        relative
    "
      >
        <h1 className='
        text-white
        font-bold
        text-3xl
        md:text-6xl
        top-[40px]
        left-[20px]
        absolute

        '
        >
          *I am <span className='
          text-orange-600
          '>Nathan</span>
        </h1>
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
      <AboutSection/>
    </section>
  );
};

export default About;
