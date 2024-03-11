const HomeProjects = () => {
  return (
    <section className="min-h-screen ">
      <div className="max-sm:grid  max-sm:grid-cols-7  max-sm:gap-8 max-sm:p-[50px] min-h-screen max-sm:w-full">
        <div className="card max-sm:row-span-3  max-sm:col-span-7  relative h-full ">
          <div className="w-full h-full bg-youtube-card bg-cover hover:scale-105 bg-center bg-no-repeat "></div>
        </div>
        <div className="card  max-sm:col-span-7 relative h-full ">
          <div className="w-full h-full bg-guitar-card bg-contain bg-no-repeat bg-center "></div>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
