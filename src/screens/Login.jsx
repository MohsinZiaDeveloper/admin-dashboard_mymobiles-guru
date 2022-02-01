import React, { useState } from "react";
import { ImageAsset } from "../components";
import { useNavigate } from "react-router";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const navigate = useNavigate();
  const [userCreds, setUserCreds] = useState({
    email: "",
    password: "",
  });

  const inputEmail = (event) => {
    setUserCreds({ ...userCreds, email: event.target.value });
  };
  const inputPassword = (event) => {
    setUserCreds({ ...userCreds, password: event.target.value });
  };

  const onsubmits = (event) => {
    event.preventDefault();
    if (
      userCreds?.email === adminUser?.email &&
      userCreds?.password === adminUser?.password
    ) {
      toast("Admin Login success");
      navigate("/Admin");
    } else {
      alert("Fail ! please check your credentials Thanks");
    }
  };
  return (
    <>
      <form onSubmit={onsubmits}>
        <div className="min-h-screen bg-gray-100 text-gray-800 antialiased px-4 py-6 flex flex-col justify-center sm:py-12">
          <div className="relative py-3 sm:max-w-xl mx-auto w-full lg:w-1/2 text-center">
            <div className="flex justify-center">
              <ImageAsset
                className="justify-center text-center w-34 h-34 mb-[2rem] mt-[-6rem] "
                src="LoginLogo"
              />
            </div>
            <span className="text-[1.5rem] font-bold font-Yuji">
              Login to your account
            </span>
            <div className="relative mt-4 bg-white shadow-md sm:rounded-lg text-left">
              <div className="h-2 bg-indigo-400 rounded-t-md"></div>
              <div className="py-14 px-8">
                <label className="block font-semibold">Username or Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  onChange={inputEmail}
                  className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                />
                <label className="block mt-3 font-semibold">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={inputPassword}
                  className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
                />
                <div className="flex justify-between items-baseline">
                  <button
                    className="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg"
                    type="submit"
                  >
                    Login
                  </button>
                  <a href="/" className="text-sm hover:underline">
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
