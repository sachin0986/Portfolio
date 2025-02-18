import FilterSection from "./FilterSection"

const AboutProject = () => {
    return(
        <div className="bg-black">
            <div className="text-white">
                <h2 className=" text-white flex justify-center font-bold text-4xl pt-10">
                A Developer’s Journey : From Ideas to Reality 🎨
                </h2>
            </div>
            <div className="pt-20 pb-20">
                <FilterSection />
            </div>
        </div>
    )
}

export default AboutProject