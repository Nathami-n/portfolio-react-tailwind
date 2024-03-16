import { Route, Routes } from "react-router";
import { Home } from "./pages";
import { Header,Footer } from "./components";

const App = () => {
  return (
    <main className="bg-bgbody h-screen overflow-x-hidden">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    <Footer/>
    </main>
  );
};

export default App;
