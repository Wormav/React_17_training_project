import React from "react";
import MovieList from "./components/MoviesList/MovieList";
import MovieDetails from "./components/MoviesDetails/MovieDetails";
import SearchBar from "./components/SearchBar/SearchBar";
import Loading from "../../components/Utils/Loading";

function Movies({
  updateSelectedMovie,
  movies,
  setMovies,
  selected,
  loaded,
  addFavori,
  removeFavori,
  favorisTitle,
}) {
  return (
    <>
      <SearchBar updateMovie={(m) => setMovies(m)} />
      {loaded ? (
        <div className="d-flex flex-row flex-fill pt-4 p-2">
          <MovieList
            movie={movies}
            updateSelectedMovie={updateSelectedMovie}
            addFavori={addFavori}
            removeFavori={removeFavori}
            favorisTitle={favorisTitle.map((f) => f.title)}
          />
          <MovieDetails movie={movies[selected]} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Movies;
