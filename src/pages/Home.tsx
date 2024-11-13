import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-screen relative home flex bg-green-700 text-white">
      <section className="flex flex-col items-center text-center justify-center space-y-6">
        <h1 className="text-yellow-500 text-4xl font-extrabold max-w-2xl">
          Let's Join Hands in Reducing Carbon Emissions
        </h1>
        <h2 className="text-yellow-300 text-2xl font-semibold max-w-xl">
          Our efforts aim at achieving a better future by reducing global warming and conserving the environment.
        </h2>
        <div className="flex space-x-4">
          <Link to="/learn-more">
            <button className="bg-yellow-500 text-gray-800 px-6 py-3 rounded-lg hover:bg-yellow-400 transition duration-300">
              Learn More
            </button>
          </Link>
          <Link to="/get-involved">
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-gray-800 transition duration-300">
              Get Involved
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
