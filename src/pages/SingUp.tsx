import React from "react";
import { NavLink } from "react-router-dom";

const SingUp = () => {
  return (
    <div className=" h-screen relative singup">
    <form
          className='bg-white w-2/5 flex flex-col m-4 items-center m-auto px-8 py-4  border rounded'
        
        >
          <h3 className='text-green-700 font-semibold text-2xl'>Sign Up</h3>
          <div className='w-full flex flex-col'>
            <label htmlFor='Full Name' className='py-1'>
              Full Name
            </label>
            <input
              type='text'
              className=' focus:outline-violet-600 py-1 px-4 border'
              required
              name='full_name'
            />
            <label htmlFor='user name' className='py-1'>
              User Name
            </label>
            <input
              type='text'
              className=' focus:outline-violet-600 py-1 px-4 border'
              required
              name='username'
            />
            <label htmlFor='email' className='py-1'>
              Email
            </label>
            <input
              type='email'
              className=' focus:outline-violet-600 py-1 px-4 border'
              required
              name='email'
            />
            <label htmlFor='contact' className='py-1'>
              Contact
            </label>
            <input
              type='number'
              className=' focus:outline-violet-600 py-1 px-4 border'
              required
              name='contact'
            />
            <label htmlFor='password' className='py-1'>
              Password
            </label>
            <input
              type='password'
              className=' focus:outline-violet-600 py-1 px-4 border'
              required
              name='password'
            />
            <label htmlFor='password' className='py-1'>
              Confirm Password
            </label>
            <input
              type='password'
              className=' focus:outline-violet-600 py-1 px-4 border'
              required
              name='confirmPassword'
            />
            <button
              type='submit'
              className='bg-green-700 text-yellow-400 text-xl py-2 rounded my-2'
            >
              Sign Up
            </button>
            <section className='flex  gap-1 text-violet-600'>
              <p>Already have an account? </p>
              <NavLink to='/login' className='underline '>
                <p>Sign In</p>
              </NavLink>
            </section>
          </div>
        </form>

    </div>
  );
};

export default SingUp;
