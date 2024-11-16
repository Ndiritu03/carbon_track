import React from "react";
import { NavLink } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="h-screen relative login flex items-center justify-center mt-16 bg-gray-100">
      <form className="bg-white  max-w-md flex flex-col items-center px-8 py-6 border rounded shadow-md">
        <h3 className="text-green-700 font-semibold text-2xl mb-4">Sign In</h3>
        <div className="w-full flex flex-col">
          <label htmlFor="registration_number" className="py-1">
            Registration Number
          </label>
          <input
            type="text"
            className="focus:outline-green-600 py-2 px-4 border rounded"
            name="registration_number"
            required
          />
          <label htmlFor="password" className="py-1">
            Password
          </label>
          <input
            type="password"
            className="focus:outline-green-600 py-2 px-4 border rounded"
            name="password"
            required
          />
          <button className="bg-green-700 text-yellow-400 text-xl py-2 rounded mt-4 hover:bg-green-800">
            Sign In
          </button>
          <section className="flex justify-center gap-1 text-green-600 mt-4">
            <p>Don’t have an account?</p>
            <NavLink to="/singup" className="underline hover:text-green-800">
              Sign up
            </NavLink>
          </section>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
