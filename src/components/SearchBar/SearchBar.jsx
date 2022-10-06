import React from "react";
import { Formik } from "formik";
import apiMovie, { apiMovieMap } from "../../conf/api.movie";

function SearchBar({ updateMovie }) {
  const submit = async (values, actions) => {
    const query =
      "?" +
      Object.keys(values)
        .map((k) => `${k}=${values[k]}&`)
        .join("");
    const { data } = await apiMovie.get("/search/movie" + query);
    const moviesResult = data.results.map(apiMovieMap);
    updateMovie(moviesResult);
    actions.setSubmitting(false);
  };

  return (
    <Formik onSubmit={submit} initialValues={{ query: "", language: "en-US" }}>
      {({ handleSubmit, handleChange, handleBlur, isSubmitting }) => (
        <form className="d-flex flex-row p-2 m-2" onSubmit={handleSubmit}>
          <input
            name="query"
            className="flex-fill form-control mr-2"
            placeholder="Search.."
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <select
            className="mr-2 form-control w-25"
            name="language"
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <option value="en-US">Anglais</option>
            <option value="fr-FR">Francais</option>
          </select>
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
