import React from "react";
import MovieElement from "./MovieElement";

function MovieList({ movie, updateSelectedMovie }) {
  return (
    <div className="w-75 d-flex flex-row flex-wrap align-content-start">
      {movie.map((m, index) => (
        <MovieElement
          key={m.title}
          movie={m}
          updateSelectedMovie={updateSelectedMovie}
        />
      ))}
    </div>
  );
}

export default MovieList;