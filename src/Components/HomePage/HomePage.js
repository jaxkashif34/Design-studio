import LogoMaker from "../LogoMaker/LogoMaker";
import FlyMaker from "../FlyMaker/FlyMaker";
import Resume from "../Resume/Resume";
import Poster from "../Poster/Poster";
import Invitation from "../Invitation/Invitation";
import Business from "../Business/Business";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Meme from "../Meme/Meme";
import Video from "../Video/Video";
import WeOffers from "../WeOffers/WeOffers";
import AboutUs from "../AboutUs/AboutUs";
// import { Route, Routes } from "react-router";

const Main = () => {
  return (
    <>
      <Header />
      <Hero />
      <LogoMaker />
      <FlyMaker />
      <Resume />
      <Poster />
      <Invitation />
      <Business />
      <Meme />
      <Video />
      <WeOffers />
      <AboutUs />
    </>
  );
};

export default Main;
