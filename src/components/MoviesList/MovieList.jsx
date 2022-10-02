import React from "react";
import MovieElement from "./MovieElement";

function MovieList() {
  return (
    <div className="w-75 d-flex flex-row flex-wrap align-content-start">
      <MovieElement />
      <MovieElement />
      <MovieElement />
      <MovieElement />
      <MovieElement />
      <MovieElement />
    </div>
  );
}

export default MovieList;
