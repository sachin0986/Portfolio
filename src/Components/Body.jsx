import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AboutComponent from "./AboutComponent";
import { FooterCarousel } from "./Corousal";
import AboutProject from "./AboutProjects";
import ProjectShowcase from "../Pages/ProjectShowcase";




const Body = () => {
    return(
        <div>
           <AboutComponent />
           <AboutProject />
           <FooterCarousel />
        </div>
    )
}

export default Body;