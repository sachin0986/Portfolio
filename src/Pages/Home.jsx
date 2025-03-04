import React from "react";
import AboutComponent from "../Components/AboutComponent";
import { FooterCarousel } from "../Components/Corousal";
import AboutProject from "../Components/AboutProjects";

const Home = () => {
  return (
    <>
      <AboutComponent />
      <AboutProject />
      <FooterCarousel />
    </>
  );
};

export default Home;
