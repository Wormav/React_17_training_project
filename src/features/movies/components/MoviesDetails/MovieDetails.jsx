import React from "react";

function MovieDetails({ movie }) {
  return (
    <div className="w-25 bg-light p-4 d-flex flex-column">
      <h5>{movie.title}</h5>
      <hr className="w-100" />
      <div>
        <img
          className="d-block mx-auto w-100"
          src={movie.img}
          alt="jacket du film"
        />
      </div>
      <hr className="w-100" />
      <span className="text-secondary">{movie.details}</span>
      <span>{movie.description}</span>
    </div>
  );
}

export default MovieDetails;
