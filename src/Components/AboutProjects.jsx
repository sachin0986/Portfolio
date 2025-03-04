import FilterSection from "./FilterSection";

const AboutProject = () => {
  return (
    <div className="bg-black">
      <div className="text-white px-4 sm:px-6 md:px-8">
        <h2 className="text-white flex justify-center font-bold text-2xl sm:text-3xl md:text-4xl pt-6 sm:pt-8 md:pt-10 text-center">
          <span className="hidden sm:inline">
            A Developer's Journey : From Ideas to Reality 🎨
          </span>
          <span className="sm:hidden">Dev Journey: Ideas to Reality 🎨</span>
        </h2>
      </div>
      <div className="pt-10 sm:pt-14 md:pt-20 pb-12 sm:pb-16 md:pb-20">
        <FilterSection />
      </div>
    </div>
  );
};

export default AboutProject;
