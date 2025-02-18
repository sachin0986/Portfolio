import React from "react";
import { AboutCarousel, AllPicturesCarousel } from "../Components/Corousal";
import AboutVideo from "../Components/AboutVideo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GameComponent from "../Components/GameComponent";


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

      {/* Section 2: Fitness & Workout */}
      <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl text-gray-300">I lift every day</h2>
          <h1 className="text-5xl font-bold text-[#FF9900]">And I go Super</h1>
        </div>
        <div className="max-w-md text-gray-400">
          <p>
            Workouts are a part of my routine. They help me stay physically fit and also keep me sane while trying to develop great products.
          </p>
        </div>
      </div>

      <div className="space-y-8">
        <h2 className="text-4xl font-bold text-center text-[#927fe4]">🎓 My Journey at VIT Bhopal – More Than Just Code!</h2>
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