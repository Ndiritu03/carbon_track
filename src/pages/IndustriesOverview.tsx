import React from 'react';

// Sample data to display on the page
const companies = [
  {
    name: "Green Energy Inc.",
    contribution: "Reducing",
    description: "Leading the way in renewable energy initiatives.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJBqRhgTssYWivBA4MZ9E1wm6q4Tl7E44kKA&s",
  },
  {
    name: "SteelWorks Ltd.",
    contribution: "Emitting",
    description: "Significant carbon output in steel production.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8vPnIL6Se8f7OrJ4cQK_pMUZl-jkZjnLesg&s",
  },
  {
    name: "EcoTech Solutions",
    contribution: "Reducing",
    description: "Pioneering carbon capture technology.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM7-iofz7ZSkC31AElZZt476ZNvzwh6QeiwQ&s",
  },
  {
    
    name: "OilCorp",
    contribution: "Emitting",
    description: "High emissions due to fossil fuel extraction.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRveb8KrG9rzsV5Afp58dMvtJXLvbq0KmfgtQ&s",
  },
  {
    
    name: "OilCorp",
    contribution: "Emitting",
    description: "High emissions due to fossil fuel extraction.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRveb8KrG9rzsV5Afp58dMvtJXLvbq0KmfgtQ&s",
  },
  {
    
    name: "Coal Industries",
    contribution: "Emitting",
    description: "High emissions due to fossil fuel extraction.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2RGSjsxicRq9JsjcwjcW9s2y7UKVpDGTlA&s",
  },
];

const IndustriesOverview = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-800">Company Contributions to Carbon Emissions</h1>
        <p className="text-lg text-gray-600 mt-2">An overview of emissions and reduction efforts across industries.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {companies.map((company, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src={company.image}
              alt={company.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800">{company.name}</h2>
              <p className={`mt-2 font-medium ${company.contribution === "Reducing" ? "text-green-600" : "text-red-600"}`}>
                {company.contribution} Emissions
              </p>
              <p className="text-gray-600 mt-2">{company.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesOverview;
