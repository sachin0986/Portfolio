import React from "react";

const Error = () => {
    return(
        <>
        <div className="w-full flex justify-evenly py-6">
        {["All Public Repos", "Deployments"].map((category) => (
          <button
            key={category}
            className={`${style.filterButton} ${selectedCategory === category ? "bg-amber-600" : "bg-amber-500"}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
        </>
    )
}

export default Error;