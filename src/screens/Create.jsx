import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { TextField } from "../components";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { addNewMobile } from "../store/mobilesActions";

const Create = () => {
  const dispatch = useDispatch();

  const validate = Yup.object({
    BrandName: Yup.string().required("Required"),
    RamRom: Yup.string().required("Required"),
    condition: Yup.string().required("Required"),
    Price: Yup.string().required("Required"),
    Location: Yup.string().required("Required"),
    contactus: Yup.string()
      .min(11, "Must be 11 characters ")
      .required("Required"),
    checkboxcheck: Yup.boolean(""),
    ifCityisChecked: Yup.string().when("checkboxcheck", {
      is: (checkboxcheck) => checkboxcheck === true,
      then: Yup.string().required("I am required now the checkbox is checked"),
    }),
  });

  const { mobileList } = useSelector((state) => state.mobiles);
  const [item, setItem] = useState();

  const { id } = useParams(); // parameterized id get here
  // console.log("params", id);

  useEffect(() => {
    if (id !== "createNew") {
      mobileList.map((item) => {
        if (item?.id?.toString() === id?.toString()) {
          setItem(item);
        }
      });
    }
  }, [id, mobileList]);
  console.log("item", item);
  return (
    <>
      <Formik
        initialValues={{
          BrandName: "",
          RamRom: "",
          condition: "",
          Price: "",
          Location: "",
          contactus: "",
          checkboxcheck: "",
          ifCityisChecked: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          console.log("submit values ", values);
          dispatch(addNewMobile(values));
        }}
      >
        {(formik) => (
          <div className="border border-orange flex justify-center ">
            <div className="w-1/2">
              <div className="w-full p-4 flex justify-center">
                {id !== "createNew" ? (
                  <h1>Edit Mobile </h1>
                ) : (
                  <h1>Create Mobile </h1>
                )}
              </div>
              {/* {console.log("formik values = ", formik.values)} */}
              <Form>
                <div className="flex flex-col space-y-3">
                  <TextField
                    label="Brand Name"
                    name="BrandName"
                    value={item?.BrandName}
                    type="text"
                  />
                  <TextField
                    label="Ram/Rom"
                    name="RamRom"
                    value={item?.RAM_ROM}
                    type="text"
                  />
                  <TextField
                    label="Condition"
                    name="condition"
                    value={item?.Condition}
                    type="text"
                  />
                  <TextField
                    label="price"
                    name="Price"
                    value={item?.Price}
                    type="text"
                  />
                  <TextField
                    label="Location"
                    name="Location"
                    value={item?.Location}
                    type="text"
                  />

                  {/* <TextField
                    type="checkbox"
                    name="checkboxcheck"
                    label="City ?"
                  />

                  <TextField label="City" name="ifCityisChecked" type="text" /> */}
                  <TextField
                    label="contactus"
                    value={item?.ContactNo}
                    name="contactus"
                    type="text"
                  />

                  {/* for practice  */}

                  <div className="flex pt-4 space-x-6 pb-4 w-40">
                    <button
                      className="btn text-sm font-light rounded-sm p-1 pl-6 pr-6 bg-orange-400 btn-dark mt-3"
                      type="submit"
                    >
                      Create
                    </button>
                    <button
                      className="btn text-sm font-light rounded-sm p-2 pl-6 pr-6 bg-red-200 btn-dark mt-3"
                      type="reset"
                    >
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
