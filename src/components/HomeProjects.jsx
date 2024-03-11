import { CiLocationArrow1 } from "react-icons/ci";
const HomeProjects = () => {
  return (
    <section className="min-h-screen ">
      <h1 className="w-full text-center text-white text-4xl mt-4 font-bold">
        Projects
      </h1>
      <div className="max-sm:grid  max-sm:grid-cols-7  max-sm:gap-8 max-sm:p-4 min-h-screen max-sm:w-full">
        <div className="max-sm:col-span-7  relative h-full w-full ">
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
        <div className="card  max-sm:col-span-7 h-full overflow-hidden ">
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
      </div>
    </section>
  );
};

export default HomeProjects;
