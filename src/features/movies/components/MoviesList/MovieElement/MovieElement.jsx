import React from "react";

const style = {
  width: "300px",
  height: "200px",
  overflow: "hidden",
  margin: "0px 5px 10px 5px",
  cursor: "pointer",
};

function MovieElement({
  movie,
  updateSelectedMovie,
  removeFavori,
  addFavori,
  isFavoris,
}) {
  function mouseEnter() {
    updateSelectedMovie(movie.title);
  }

  return (
    <div
      onClick={mouseEnter}
      style={style}
      className="d-flex flex-row bg-light"
    >
      <img width="185" alt="film" src={movie.img} />
      <div className="flex-fill d-flex flex-column p-3">
        <h5>{movie.title}</h5>
        <hr className="w-100" />
        <span className="flex-fill">{movie.details}</span>
        <div className="d-flex flex-row justify-content-end">
          {isFavoris ? (
            <button
              onClick={() => {
                removeFavori(movie.title);
              }}
              className="btn btn-small btn-danger"
            >
              Remove
            </button>
          ) : (
            <button
              onClick={() => {
                addFavori(movie.title);
              }}
              className="btn btn-small btn-primary"
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieElement;
