import { Route, Routes } from "react-router";
import { Home } from "./pages";
import { Header } from "./components";

const App = () => {
  return (
    <main className="bg-bgbody h-screen overflow-hidden">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;
