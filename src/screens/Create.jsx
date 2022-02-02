import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "../components";
import * as Yup from "yup";

const Create = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required"),
  });
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
        }}
      >
        {(formik) => (
          <div className="border border-orange flex justify-center ">
            <div className="w-1/3">
              <h1 className="my-3 font-lighter">Login</h1>
              {/* {console.log("formik values = ", formik.values)} */}
              <Form className="border border-green-800">
                <div className="flex flex-col space-y-3">
                  <TextField label="email" name="email" type="text" />
                  <TextField label="password" name="password" type="password" />
                  <div className="flex w-40 flex-col">
                    <button className="btn btn-dark mt-3" type="submit">
                      Register
                    </button>
                    <button className="btn btn-danger mt-3 ml-3" type="reset">
                      Reset
                    </button>
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

export default Create;
