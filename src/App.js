import React, { useState } from "react";
import Header from "./components/Header/Header";
import MovieDetails from "./components/MoviesDetails/MovieDetails";
import MovieList from "./components/MoviesList/MovieList";
import Loading from "./components/Utils/Loading";
import dataMovies from "./data";

function App() {
  const [selected, setSelected] = useState(0);
  const [movies, setMovies] = useState(null);
  const [loaded, setLoaded] = useState(false);

  setTimeout(() => {
    setMovies(dataMovies);
    setLoaded(true);
  }, 2000);

  function updateSelectedMovie(title) {
    const index = movies.findIndex((m) => {
      return title === m.title;
    });
    setSelected(index);
  }

  return (
    <div className="App d-flex flex-column">
      <Header />
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
