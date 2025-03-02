import { CLOUDINARY } from "../Utils/Database";

const WorkoutComponent = () => {
  return (
      <div className="bg-[#F2D2BD] p-4 md:p-6 lg:p-8 text-white">
        {/* Upper Section - Responsive */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-between md:ml-8 md:mr-8 lg:ml-20 lg:mr-20 mt-4 md:mt-20">
          {/* First Div */}
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl lg:text-3xl pl-2 md:pl-4 text-[#A0522D]">I lift every day</h2>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#4A0404] mt-2 md:mt-4">And I go Super</h1>
          </div>
          
          {/* Second Div - Always showing full description */}
          <div className="flex-1 mt-4 md:mt-0">
            <p className="text-lg md:text-xl lg:text-2xl text-[#A0522D] md:text-center">
              Workouts are a part of my routine. They help me stay physically fit and also keep me sane while trying to develop great products.
            </p>
          </div>
        </div>
      
        {/* Lower Section - Responsive Image with better positioning */}
        <div className="flex flex-col items-center md:items-end mt-8 md:mt-0">
          <div className="mt-[-20px] md:mt-[-100px] lg:mt-[-200px] w-full flex justify-center md:justify-end">
            <img
              src={CLOUDINARY + `v1739824465/goku_prev_ui_eca6nm.png`}
              alt="GOKU IMAGE"
              className="w-full max-w-[400px] md:max-w-[600px] lg:max-w-[1200px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
  );
};

export default WorkoutComponent;




/* 

old code

    <div className="bg-[#F2D2BD] p-6 text-white">

      <div className="flex ml-20 mr-20 mt-20 flex-col md:flex-row gap-8 justify-between">

        <div className="flex-1">
          <h2 className="text-3xl pl-4 text-[#A0522D]">I lift every day</h2>
          <h1 className="text-6xl font-bold text-[#4A0404] mt-4">And I go Super</h1>
        </div>
        

        <div className="flex-1">
          <p className="text-2xl text-center text-[#A0522D]">
            Workouts are a part of my routine. They help me stay physically fit and also keep me sane while trying to develop great products.
          </p>
        </div>
      </div>


      <div className="flex justify-end mt-[-300px]">
        <img
          src={CLOUDINARY + `v1739824465/goku_prev_ui_eca6nm.png`}
          alt="GOKU IMAGE"
          className="w-[1200px] h-[800px] object-contain"
        />
      </div>
    </div>


*/