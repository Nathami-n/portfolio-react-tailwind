const HomeHero = () => {
  return (
    <section className="min-h-screen max-md:p-6">
      <div className="  mx-auto max-lg:flex max-lg:flex-col items-center lg:gap-[40px] lg:grid lg:grid-cols-8  mt-8 gap-11">
        <div className=" bg-red-400  max-lg:max-w-[750px] max-lg:max-h-[400px] lg:w-[95%] lg:h-[600px]  lg:ml-[40px] lg:col-span-4 card overflow-hidden grid place-content-center ">
        <img
            src="/lap.avif"
            alt="Hero Image"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="text-white  lg:ml-[50px] lg:w-[100%] lg:h-[600px]  w-[98%] lg:col-span-3   gap-10 bg-bgcard rounded-2xl flex flex-col p-8 justify-center items-center">
          <h1 className="font-bold text-4xl">
            Hello, I&apos;m <span className="text-[#f75c2d]">Nathan</span>
          </h1>
          <p className="text-[#cdcdcd]">
            &#8212; A tech oriented enthusiasit who is characterised by avid and
            constant devouring of new and existing technologies. I am well
            versed in both front-end and back-end technologies{" "}
          </p>
          <div>
            <div>
              <img
                src="/react.svg"
                alt="react-icon"
                className="w-[30px] bg-white/50 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
