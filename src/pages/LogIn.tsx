import React from "react";
import { NavLink } from "react-router-dom";

const LogIn = () => {
  return (
    <div className="my-auto h-screen relative login">
      <section className=" flex flex-col items-center ">
        <form
          className="bg-white w-2/6 flex flex-col items-center mt-5 px-8 py-4  border rounded "
        >
          <h3 className="text-green-700 font-semibold text-2xl">Sign In</h3>
          <div className="w-full flex flex-col">
            <label htmlFor="user name" className="py-1">
              Regestration Number
            </label>
            <input
              type="email"
              className=" focus:outline-violet-600 py-1 px-2 border"
              name="email"
              required
            />
            <label htmlFor="password" className="py-1">
              Password
            </label>
            <input
              type="password"
              className=" focus:outline-violet-600 py-1 px-2 border"
              required
              name="password"
            />
            <button className="bg-green-700 text-yello-400 text-xl py-2 rounded my-2">
              Sign In
            </button>
            <section className="flex gap-1 text-violet-600">
              <p>Don`t have an account?</p>
              <NavLink to="/register" className="underline ">
                <p>Sign up</p>
              </NavLink>
            </section>
          </div>
        </form>
              
      </section>
    </div>
  );
};

export default LogIn;
