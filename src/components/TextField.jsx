import React from "react";
import { ErrorMessage, useField } from "formik";

const TextField = (props) => {
  const { name, label, type } = props;
  const [field, meta] = useField(props);

  //   console.log("field", field);
  //   console.log("meta", meta);

  return (
    <div className="flex flex-col">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`shadow-none  p-2 rounded-md border ${
          meta.touched && meta.error && "border-2 border-red-700"
        }`}
        autoComplete="off"
        {...field}
        {...props}
      />
      <ErrorMessage
        component="div"
        className="text-red-700 text-sm"
        name={field.name}
      />
    </div>
  );
};

export default TextField;
