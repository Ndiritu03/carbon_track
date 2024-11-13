import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-200 py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-green-700 sm:text-5xl">
            About Us
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            We're on a mission to help individuals and organizations track, reduce, and offset their carbon footprint through technology and innovation.
          </p>
        </div>

        {/* Company Mission */}
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-700">
              At Carbon_track, we are committed to empowering individuals and businesses to take control of their environmental impact. By offering a platform for precise carbon footprint tracking and actionable insights, we aim to build a more sustainable future.
            </p>
            <p className="text-lg text-gray-700">
              Our goal is to make sustainability accessible and tangible for everyone, providing data-driven solutions that help reduce carbon emissions and promote responsible consumption patterns.
            </p>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpw6uPJKEGkv0S62X-ieksYmuowcxnK1jALw&s" // Replace with your image path
              alt="Mission Image"
              className="w-full h-72 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">Innovation</h3>
            <p className="mt-2 text-gray-600">
              We continuously innovate to create smarter tools that empower users to make data-backed decisions in reducing their carbon footprint.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">Transparency</h3>
            <p className="mt-2 text-gray-600">
              We believe in open access to data. Our platform provides clear insights into how your actions impact the environment.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">Sustainability</h3>
            <p className="mt-2 text-gray-600">
              We prioritize sustainability in everything we do, from our carbon offset programs to promoting low-impact behaviors.
            </p>
          </div>
        </div>

        {/* Blog Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900">Our Latest Insights</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <article className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmTxaxHbyN_inrmValOHytcnsxqUAf7Dr9vQ&s" // Replace with your image path
                alt="Carbon Footprint"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900">Understanding Your Carbon Footprint</h3>
                <p className="mt-2 text-gray-600">
                  Learn what a carbon footprint is and how tracking it can help you make sustainable choices in your daily life.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-indigo-600 hover:text-indigo-800"
                >
                  Read More
                </a>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIs1drWzXiMU_xna2gYZn5MTT4zRH77N8tjA&s" // Replace with your image path
                alt="Sustainable Choices"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900">Making Sustainable Choices Easy</h3>
                <p className="mt-2 text-gray-600">
                  Discover practical tips on reducing your carbon footprint, from eco-friendly commuting to mindful shopping habits.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-indigo-600 hover:text-indigo-800"
                >
                  Read More
                </a>
              </div>
            </article>

            <article className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRQLjlAmBOcl1t5hWpmoQBf53yF0nvvgKZ-g&s" // Replace with your image path
                alt="Carbon Offsetting"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-gray-900">Carbon Offsetting: How It Works</h3>
                <p className="mt-2 text-gray-600">
                  Understand how carbon offsetting programs work and how they can be a vital part of your sustainability journey.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-indigo-600 hover:text-indigo-800"
                >
                  Read More
                </a>
              </div>
            </article>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-24 text-center">
          <p className="text-gray-600 text-lg">
            Join us in our commitment to a cleaner planet. Let's reduce, track, and offset carbon emissions together!
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="text-indigo-600 hover:text-indigo-800 text-lg font-semibold"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
