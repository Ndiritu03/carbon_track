import React from 'react';

// Sample data to display on the page
const privateProjects = [
  {
    name: "Green Manufacturing Initiative",
    company: "EcoCorp",
    description: "Revamping manufacturing processes to use eco-friendly materials and reduce waste.",
    impact: "Reduced emissions by 25% in the past year.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Dp3KbIQD49b93rZw1MCF2a0So8yHwRxkVA&s",
  },
  {
    name: "Carbon-Neutral Supply Chain",
    company: "Global Goods Ltd.",
    description: "Aiming for a fully carbon-neutral supply chain through renewable energy and carbon offsets.",
    impact: "Expected to achieve carbon neutrality by 2025.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsb9iQhHWBHbdpkHPuhnQfdhuL01EmvC3VyQ&s",
  },
  {
    name: "Urban Green Spaces",
    company: "CityScape Developers",
    description: "Investing in green spaces in urban areas to offset emissions and improve air quality.",
    impact: "Offsetting an estimated 2 million tons of CO₂ annually.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr51sno4vq4fo-Sz6h7orCeiaCwa1uA6fmTw&s",
  },
  {
    name: "Electric Fleet Conversion",
    company: "QuickMove Logistics",
    description: "Transitioning from diesel vehicles to electric for all deliveries by 2030.",
    impact: "Reduced transport emissions by 40% so far.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZGnrG5G_8Rnw52ZTTbI7QYOglN9odIYPwlg&s",
  },
  {
    name: "Electric Fleet Conversion",
    company: "QuickMove Logistics",
    description: "Transitioning from diesel vehicles to electric for all deliveries by 2030.",
    impact: "Reduced transport emissions by 40% so far.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZGnrG5G_8Rnw52ZTTbI7QYOglN9odIYPwlg&s",
  },
  {
    name: "Green Manufacturing Initiative",
    company: "EcoCorp",
    description: "Revamping manufacturing processes to use eco-friendly materials and reduce waste.",
    impact: "Reduced emissions by 25% in the past year.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Dp3KbIQD49b93rZw1MCF2a0So8yHwRxkVA&s",
  },
];

const PrivateSectorContributions = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 mt-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-purple-800">Private Sector Contributions to Carbon Emission Reduction</h1>
        <p className="text-lg text-gray-600 mt-2">
          Discover the initiatives and projects led by private companies to combat carbon emissions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {privateProjects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">{project.name}</h2>
              <p className="text-sm text-gray-500">{project.company}</p>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <p className="mt-4 text-purple-700 font-medium">{project.impact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivateSectorContributions;
