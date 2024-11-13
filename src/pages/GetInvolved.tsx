import React from 'react';

const GetInvolved = () => {
  return (
    <div className="h-screen relative getInvolved text-white min-h-screen flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-yellow-500">How You Can Get Involved</h1>
        <p className="mt-4 text-lg text-yellow-300 max-w-2xl mx-auto">
          Here are some ways you can take action:
        </p>
        <ul className="mt-6 list-disc text-lg text-yellow-500 max-w-2xl fondt-semi-bold mx-auto space-y-4">
          <li>Track your personal carbon emissions using our app.</li>
          <li>Reduce your carbon footprint by adopting sustainable practices like using public transport, reducing waste, and conserving energy.</li>
          <li>Sign up to receive updates and participate in community efforts to tackle climate change.</li>
          <li>Donate to environmental organizations that focus on reducing global warming.</li>
        </ul>
        <button className="mt-6 bg-yellow-500 text-gray-800 px-6 py-3 rounded-lg hover:bg-yellow-400 transition duration-300">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default GetInvolved;
