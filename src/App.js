import React, { useCallback, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Movies from "./features/movies/Movies";
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
      <Movies
        loaded={loaded}
        updateSelectedMovie={updateSelectedMovie}
        movies={movies}
        setMovies={setMovies}
        selected={selected}
      />
    </div>
  );
}

export default App;
