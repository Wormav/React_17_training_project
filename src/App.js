import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import MovieDetails from "./components/MoviesDetails/MovieDetails";
import MovieList from "./components/MoviesList/MovieList";
import SearchBar from "./components/SearchBar/SearchBar";
import Loading from "./components/Utils/Loading";

import apiMovie from "./conf/api.movie";

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

  const getData = async () => {
    const { data } = await apiMovie.get("/discover/movie");
    const movies = data.results.map((m) => ({
      img: "https://image.tmdb.org/t/p/w500" + m.poster_path,
      title: m.title,
      details: `${m.release_date} | ${m.vote_average}/10 (${m.vote_count})`,
      description: m.overview,
    }));
    setMovies(movies);
    setLoaded(true);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App d-flex flex-column">
      <Header />
      <SearchBar setMovies={setMovies} />
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
