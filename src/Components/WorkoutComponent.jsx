import { CLOUDINARY } from "../Utils/Database";

const WorkoutComponent = () => {
  return (
    <div className="bg-[#F2D2BD] p-6 text-white">
      {/* Upper Section */}
      <div className="flex ml-20 mr-20 mt-20 flex-col md:flex-row gap-8 justify-between">
        {/* First Div */}
        <div className="flex-1">
          <h2 className="text-3xl pl-4 text-[#A0522D]">I lift every day</h2>
          <h1 className="text-6xl font-bold text-[#4A0404] mt-4">And I go Super</h1>
        </div>
        
        {/* Second Div */}
        <div className="flex-1">
          <p className="text-2xl text-center text-[#A0522D]">
            Workouts are a part of my routine. They help me stay physically fit and also keep me sane while trying to develop great products.
          </p>
        </div>
      </div>

      {/* Lower Section */}
      <div className="flex justify-end mt-[-300px]">
        <img
          src={CLOUDINARY + `v1739824465/goku_prev_ui_eca6nm.png`}
          alt="GOKU IMAGE"
          className="w-[1200px] h-[800px] object-contain"
        />
      </div>
    </div>
  );
};

export default WorkoutComponent;