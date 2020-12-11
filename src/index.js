import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";

const App = () => {
  const [property, updateProperty] = useState({
    style: "residential",
    yearBuilt: "1940",
    grade: "C-1"
  });
  const formik = useFormik({
    initialValues: property,
    onSubmit: (values) => {
      updateProperty(values);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">style</label>
      <input
        id="style"
        name="style"
        type="style"
        onChange={formik.handleChange}
        value={formik.values.style}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
