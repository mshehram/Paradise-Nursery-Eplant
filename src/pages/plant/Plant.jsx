import React from "react";
import plantsData from "../../data/plantsData";
import PlantCard from "../../components/PlantCard";

function Plant() {
  return (
    <div className="w-full">
      <div className="bg-[#f5f5f5] w-full overflow-x-hidden px-4 sm:px-8 md:px-10 lg:px-20 py-20 md:py-24">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-black">
          Air Purifying Plants
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {plantsData.AirPurifyingPlants.map((plant, index) => (
            <PlantCard key={index} plant={plant} />
          ))}
        </div>

        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl mt-16 mb-8 font-bold text-black">
          Fragrant Plants
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {plantsData.FragrantPlants.map((plant, index) => (
            <PlantCard key={`frag-${index}`} plant={plant} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Plant;
