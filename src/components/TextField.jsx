import React, { useState } from "react";
import { ErrorMessage, useField } from "formik";

const TextField = (props) => {
  const { name, label, type, value } = props;
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col mt-3">
      <label className="text-sm pb-3 font-light" htmlFor={name}>
        {label}
      </label>
      <input
        className={`shadow-none text-sm font-light  p-2 rounded-md border ${
          meta.touched && meta.error && "border border-red-700"
        }`}
        autoComplete="off"
        value={value}
        {...field}
        {...props}
      />
      <ErrorMessage
        component="div"
        className="text-red-700 text-sm"
        name={name}
      />
    </div>
  );
};

export default TextField;
