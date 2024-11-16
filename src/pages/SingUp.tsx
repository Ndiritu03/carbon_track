import React from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="h-screen relative signup flex items-center justify-center mt-16 bg-gray-100">
      <form className="bg-white w-full max-w-md flex flex-col items-center px-8 py-6 bg-gray-200 border rounded shadow-md">
        <h3 className="text-green-700 font-semibold text-2xl mb-4">Sign Up</h3>
        <div className="w-full flex flex-col">
          <label htmlFor="full_name" className="py-1">
            Name Of Company
          </label>
          <input
            type="text"
            className="focus:outline-green-600 py-2 px-4 border rounded"
            required
            name="full_name"
          />
          <label htmlFor="username" className="py-1">
            Industry
          </label>
          <input
            type="text"
            className="focus:outline-green-600 py-2 px-4 border rounded"
            required
            name="username"
          />
          <label htmlFor="email" className="py-1">
            Email
          </label>
          <input
            type="email"
            className="focus:outline-green-600 py-2 px-4 border rounded"
            required
            name="email"
          />
          <label htmlFor="contact" className="py-1">
            Company's Registration Number
          </label>
          <input
            type="number"
            className="focus:outline-green-600 py-2 px-4 border rounded"
            required
            name="contact"
          />
          <label htmlFor="password" className="py-1">
            Password
          </label>
          <input
            type="password"
            className="focus:outline-green-600 py-2 px-4 border rounded"
            required
            name="password"
          />
          <label htmlFor="confirmPassword" className="py-1">
            Confirm Password
          </label>
          <input
            type="password"
            className="focus:outline-green-600 py-2 px-4 border rounded"
            required
            name="confirmPassword"
          />
          <button
            type="submit"
            className="bg-green-700 text-yellow-400 text-xl py-2 rounded mt-4 hover:bg-green-800"
          >
            Sign Up
          </button>
          <section className="flex justify-center gap-1 text-green-600 mt-4">
            <p>Already have an account?</p>
            <NavLink to="/login" className="underline hover:text-green-800">
              Sign In
            </NavLink>
          </section>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
