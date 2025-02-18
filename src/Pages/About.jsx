import React from "react";
import { AboutCarousel, AllPicturesCarousel } from "../Components/Corousal";
import AboutVideo from "../Components/AboutVideo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GameComponent from "../Components/GameComponent";
import WorkoutComponent from "../Components/WorkoutComponent";
import { GiGraduateCap } from "react-icons/gi";


const About = () => {

    const sliderSettings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: true,
      };

  return (
    <div className="bg-black text-white space-y-16">
      {/* Section 1: Life Beyond Work */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#FF9900]">Life is just more than work</h1>
      </div>
        <WorkoutComponent />




      <div className="space-y-8">
        <div className="flex justify-center gap-4 align-middle">
          <GiGraduateCap size={60} className="text-gray-400"/>
          <h2 className="bg-gradient-to-r from-[#5A0FC8] to-[#FF0080] text-5xl font-bold text-center bg-clip-text text-transparent">My Journey at VIT Bhopal – More Than Just Code!</h2>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 px-10 py-20 pb-8 items-center"> 
              <AboutVideo />
              <AboutCarousel />
            </div>
              <GameComponent />
             </div>
             <div className="px-10">
        <AllPicturesCarousel />
             </div>
    </div>
  );
};

export default About;