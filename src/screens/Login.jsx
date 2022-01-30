import React from "react";
import { TextField } from "@mui/material";
import { ImageAsset } from "../components";

const Login = () => {
  return (
    <>
      {/* <div className="flex w-full h-[100vh] justify-center items-center bg-[url('assets/images/loginBackground.jpg')]  ">
        <div className="flex w-1/2 h-fit   border justify-center bg-white pt-12 pb-12 border-x-red-300 ">
          <div className="flex flex-col w-1/2 border text-center rounded-md  border-orange-500 ">
            <div className="flex flex-col">
              <div className="flex justify-center">
                <ImageAsset
                  className="justify-center text-center w-24 h-24 "
                  src="LoginLogo"
                />
              </div>

              <label className="pt-5 pb-5 font-light text-md ">
                Admin Sign In
              </label>
            </div>
            <div>
              <TextField
                className="w-full"
                label="Password"
                variant="filled"
                color="success"
                focused
              />
            </div>
            <div className="mt-2">
              <TextField
                className="w-full"
                label="Password"
                variant="filled"
                color="success"
                focused
              />
            </div>
            <div className="flex pt-12 pb-6 justify-center">
              <button className=" w-fit bg-blue-500  pt-3 pb-3 pr-12 text-white pl-12 rounded-lg">
                Login
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="min-h-screen bg-gray-100 text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl mx-auto w-full lg:w-1/2 text-center">
          <div className="flex justify-center">
            <ImageAsset
              className="justify-center text-center w-34 h-34 mb-[2rem] mt-[-6rem] "
              src="LoginLogo"
            />
          </div>
          <span className="text-2xl font-light">Login to your account</span>
          <div className="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
            <div className="h-2 bg-indigo-400 rounded-t-md"></div>
            <div className="py-14 px-8">
              <label className="block font-semibold">Username or Email</label>
              <input
                type="text"
                placeholder="Email"
                class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
              />
              <label class="block mt-3 font-semibold">Password</label>
              <input
                type="password"
                placeholder="Password"
                class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
              />
              <div class="flex justify-between items-baseline">
                <button class="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg">
                  Login
                </button>
                <a href="#" class="text-sm hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
