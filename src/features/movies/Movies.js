import React from "react";
import MovieList from "./components/MoviesList/MovieList";
import MovieDetails from "./components/MoviesDetails/MovieDetails";
import SearchBar from "./components/SearchBar/SearchBar";
import Loading from "../../components/Utils/Loading";

function Movies({ updateSelectedMovie, movies, test, selected, loaded }) {
  return (
    <>
      <SearchBar updateMovie={(m) => test(m)} />
      {loaded ? (
        <div className="d-flex flex-row flex-fill pt-4 p-2">
          <MovieList movie={movies} updateSelectedMovie={updateSelectedMovie} />
          <MovieDetails movie={movies[selected]} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Movies;
