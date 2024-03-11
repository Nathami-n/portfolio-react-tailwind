const HomeProjects = () => {
  return (
    <section className="min-h-screen ">
      <div className="max-sm:grid  max-sm:grid-cols-7  max-sm:gap-8 max-sm:p-4 min-h-screen max-sm:w-full">
        <div className="max-sm:row-span-3 max-sm:col-span-7  relative h-full w-full ">
          <div className=" max-sm:rounded-lg w-full h-full bg-youtube-card bg-cover bg-center bg-no-repeat cursor-pointer "></div>
        </div>
        <div className="card  max-sm:col-span-7 relative h-full ">
          <div className="w-full h-full bg-guitar-card bg-contain bg-no-repeat bg-center cursor-pointer "></div>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
