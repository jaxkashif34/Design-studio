import HomePage from "./Components/HomePage/HomePage";
import LoGoPage from "./Components/LogoPage/LoGoPage";
import Contact from "./Components/Contact/Contact";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/logopage" exact element={<LoGoPage />} />
        </Routes>
        <Contact />
      </Router>
    </>
  );
};

export default App;

// sab ke id b remove krni ha inside the all components
