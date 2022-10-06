import React, { useCallback, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import MovieDetails from "./components/MoviesDetails/MovieDetails";
import MovieList from "./components/MoviesList/MovieList";
import SearchBar from "./components/SearchBar/SearchBar";
import Loading from "./components/Utils/Loading";
import apiMovie, { apiMovieMap } from "./conf/api.movie";

function App() {
  const [selected, setSelected] = useState(0);
  const [movies, setMovies] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function updateSelectedMovie(title) {
    const index = movies.findIndex((m) => {
      return title === m.title;
    });
    setSelected(index);
  }

  const getData = useCallback(async () => {
    const { data } = await apiMovie.get("/discover/movie");
    const moviesResult = data.results.map(apiMovieMap);
    setMovies(moviesResult);
    setLoaded(true);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="App d-flex flex-column">
      <Header />
      <SearchBar updateMovie={(bite) => setMovies(bite)} />
      {loaded ? (
        <div className="d-flex flex-row flex-fill pt-4 p-2">
          <MovieList movie={movies} updateSelectedMovie={updateSelectedMovie} />
          <MovieDetails movie={movies[selected]} />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;
