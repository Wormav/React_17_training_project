import React from "react";
import MovieElement from "./MovieElement/MovieElement";

function MovieList({
  movie,
  updateSelectedMovie,
  addFavori,
  removeFavori,
  favorisTitle,
}) {
  return (
    <div className="w-75 d-flex flex-row flex-wrap justify-content-center">
      {movie.map((m, index) => (
        <MovieElement
          key={m.title + index}
          movie={m}
          updateSelectedMovie={updateSelectedMovie}
          isFavoris={favorisTitle.includes(m.title)}
          addFavori={addFavori}
          removeFavori={removeFavori}
        />
      ))}
    </div>
  );
}

export default MovieList;
