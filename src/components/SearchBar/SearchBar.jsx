import React from "react";
import { Formik } from "formik";

function SearchBar(setMovies) {
  const submit = (values, actions) => {
    console.log(values);
  };

  return (
    <Formik onSubmit={submit} initialValues={{ query: "" }}>
      {({ handleSubmit, handleChange, handleBlur, isSubmitting }) => (
        <form className="d-flex flex-row p-2 m-2" onSubmit={handleSubmit}>
          <input
            name="query"
            className="flex-fill form-control mr-2"
            placeholder="Search.."
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button
            className="btn btn-small btn-success"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
}

export default SearchBar;
