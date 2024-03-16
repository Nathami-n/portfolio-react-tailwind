import { HomeHero, HomeProjects, HomeTools} from "../components";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HomeHero /> 
      <HomeProjects/>
      <HomeTools/>
    </div>
  );
};

export default Home;
