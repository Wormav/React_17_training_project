import React from "react";

const style = {
  width: "300px",
  height: "200px",
  overflow: "hidden",
  margin: "0px 5px 10px 5px",
  cursor: "pointer",
};

function MovieElement({ movie, updateSelectedMovie }) {
  function mouseEnter() {
    updateSelectedMovie(movie.title);
  }

  return (
    <div
      onMouseEnter={mouseEnter}
      style={style}
      className="d-flex flex-row bg-light"
    >
      <img width="150" height="200" alt="film" src={movie.img} />
      <div className="flex-fill d-flex flex-column p-3">
        <h5>{movie.title}</h5>
        <hr className="w-100" />
        <span>{movie.details}</span>
      </div>
    </div>
  );
}

export default MovieElement;
