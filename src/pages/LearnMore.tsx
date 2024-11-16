import React from 'react';

const LearnMore = () => {
  return (
    <div className="h-screen relative learnMore bg-gray-200 learnMore text-white min-h-screen flex items-center justify-center p-6">
      <div className="text-center font-bold text-xl">
        <h1 className="text-4xl font-extrabold text-gray-200">Learn More About Our Mission</h1>
        <p className="mt-4 text-lg text-yellow-400 max-w-2xl mx-auto">
          We aim to reduce global carbon emissions by implementing sustainable practices across various sectors. 
          Our goal is to inform, engage, and help individuals and organizations make a tangible impact on the environment.
        </p>
        <p className="mt-6 text-lg text-yellow-400 max-w-2xl mx-auto">
          We believe that every effort, no matter how small, contributes to a larger change. Join us in reducing the carbon footprint for a better future.
        </p>
      </div>
    </div>
  );
};

export default LearnMore;
