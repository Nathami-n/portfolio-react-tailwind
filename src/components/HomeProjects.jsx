import { CiLocationArrow1 } from "react-icons/ci";
const HomeProjects = () => {
  return (
    <section className="min-h-screen ">
      <div className="grid p-4 gap-6">
        <div className=" relative h-[400px] w-full ">
          <div className=" max-sm:rounded-lg  bg-youtube-card  bg-center projectCard transtion-all">
            <div className="cardInfo">
              <span className="text-white uppercase text-xl">YouPlay</span>{" "}
              <span>
                {" "}
                <CiLocationArrow1 className="bg-black rounded-full p-5 text-white" />
              </span>
            </div>
          </div>
        </div>
        <div className="card h-[400px] w-full overflow-hidden ">
          <div className="projectCard bg-guitar-card bg-center ">
            <div className="cardInfo">
              <span className="text-white uppercase text-xl">SerahKe</span>{" "}
              <span>
                {" "}
                <CiLocationArrow1 className="bg-black rounded-full p-5 text-white" />
              </span>
            </div>
          </div>
        </div>
        <div
          className="
          
          card
          h-[400px]
          grid
           place-content-center"
        >
          <div
            className="
         border
         rounded-full
         bg-gradient-to-br
          from-white/20 
          to-white/0
          backdrop-blur-7xl
          w-[150px]
          h-[150px]
          flex
          items-center
          justify-center
          text-neutral-200
         
         "
          >
            <p
              className="
          p-4
          text-lg
          uppercase
          cursor-pointer 
          whitespace-nowrap

          "
            >
              Reach Me
            </p>
          </div>
        </div>
        {/* SECTION */}
        <div className="card h-[400px] w-full overflow-hidden ">
          <div className="projectCard bg-car-card bg-center ">
            <div className="cardInfo">
              <span className="text-white uppercase text-xl">CarGo</span>{" "}
              <span>
                {" "}
                <CiLocationArrow1 className="bg-black rounded-full p-5 text-white" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
