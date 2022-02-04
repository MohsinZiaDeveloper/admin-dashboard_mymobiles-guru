import React, { useState } from "react";
import { ImageAsset } from "../components";
import { useNavigate } from "react-router";
import { Formik, Form } from "formik";
import { TextField } from "../components";
import * as Yup from "yup";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
  });

  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          console.log("submit values ", values);

          if (
            adminUser?.email === values?.email &&
            adminUser?.password === values?.password
          ) {
            toast.success("Login success");
            navigate("/dashboard");
          } else {
            alert("Fail ! please check your credentials Thanks");
          }
        }}
      >
        {(formik) => (
          <div className="border border-orange flex justify-center ">
            <div className="w-full">
              {/* {console.log("formik values = ", formik.values)} */}
              <Form>
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
                        <label className="block mb-3 text-lg font-semibold">
                          Username or Email
                        </label>

                        <TextField label="Email" name="email" type="text" />
                        <TextField
                          label="Password"
                          name="password"
                          type="password"
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
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Login;
