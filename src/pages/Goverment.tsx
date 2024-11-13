import React from 'react';

// Sample data to display on the page
const projects = [
  {
    name: "National Solar Initiative",
    description: "A large-scale project to increase the adoption of solar energy across the country.",
    impact: "Expected to reduce emissions by 20% by 2030.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MSxaI5Itlwip5-7lRvGswho8EIkgwnokWA&s",
  },
  {
    name: "Reforestation Program",
    description: "Planting millions of trees in deforested areas to absorb CO₂ from the atmosphere.",
    impact: "Projected to offset 5 million tons of CO₂ annually.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6YB_7_lzYKFNxAjAJgSoboN0F_ON_SUFXfg&s",
  },
  {
    name: "Green Transportation Initiative",
    description: "Promoting electric vehicles and building EV infrastructure nationwide.",
    impact: "Reduced transport emissions by 15% in the last five years.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPU00Gf0qO3V7bYnvqDwyMjuWqiSzR6sd9g&s",
  },
  {
    name: "Waste-to-Energy Plants",
    description: "Building facilities to convert waste into usable energy, reducing landfill emissions.",
    impact: "Expected to cut landfill emissions by 30%.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFhkVSNfgIA-H0E9-QsV7q7J2SxVbupM1BIQ&s",
  },
];

const GovernmentContributions = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-800">Government's Contributions to Carbon Emission Reduction</h1>
        <p className="text-lg text-gray-600 mt-2">
          Highlighting government projects aimed at reducing carbon emissions and promoting sustainability.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">{project.name}</h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <p className="mt-4 text-blue-700 font-medium">{project.impact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GovernmentContributions;
