const HomeHero = () => {
  return (
    <section className="h-screen max-md:p-6">
      <div className=" flex flex-col items-center  mt-8 gap-11">
        <div className=" max-sm:w-[80%] max-sm:h-auto bg-bgcard rounded-2xl  border border-white/20 flex flex-col justify-center items-center">
          <img
            src="/public/nate.svg"
            alt="Hero Image"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="text-white max-sm:h-[450px]] max-w-[90%] gap-10 bg-bgcard rounded-2xl flex flex-col p-8 justify-center items-center">
          <h1 className="font-bold text-4xl">
            Hello, I&apos;m <span className="text-[#f75c2d]">Nathan</span>
          </h1>
          <p className="text-[#cdcdcd]">
            &#8212; A tech oriented enthusiasit who is characterised avid and
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