import React from "react";

function MovieElement({ movie, updateSelectedMovie }) {
  function mouseEnter() {
    updateSelectedMovie(movie.title);
  }

  return (
    <div onMouseEnter={mouseEnter} className="w-50 p-2">
      <div className="border d-flex">
        <img width="150" height="200" alt="film" src={movie.img} />
        <div className="flex-fill d-flex flex-column p-3">
          <h5>{movie.title}</h5>
          <hr className="w-100" />
          <span>{movie.details}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieElement;
