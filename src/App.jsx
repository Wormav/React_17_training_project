import React, { useCallback, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Movies from "./features/movies/Movies";
import Favoris from "./features/favoris/Favoris";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import apiMovie, { apiMovieMap } from "./conf/api.movie";

function App() {
  const [selected, setSelected] = useState(0);
  const [movies, setMovies] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [favoris, setFavoris] = useState([]);

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

  const addFavori = (title) => {
    const favoriData = favoris.slice();
    const movieAdded = movies.find((m) => m.title === title);
    favoriData.push(movieAdded);
    setFavoris(favoriData);
  };

  const removeFavori = (title) => {
    const favoriData = favoris.slice();
    const indexRemoveMovie = favoriData.findIndex((f) => f.title === title);
    favoriData.splice(indexRemoveMovie, 1);
    setFavoris(favoriData);
  };

  return (
    <Router>
      <div className="App d-flex flex-column">
        <Header />
        <Routes>
          <Route
            path="*"
            element={
              <Movies
                loaded={loaded}
                updateSelectedMovie={updateSelectedMovie}
                movies={movies}
                setMovies={setMovies}
                selected={selected}
                addFavori={addFavori}
                removeFavori={removeFavori}
                favorisTitle={favoris.map((f) => f.title)}
              />
            }
          ></Route>
          <Route
            path="/movies"
            element={
              <Movies
                loaded={loaded}
                updateSelectedMovie={updateSelectedMovie}
                movies={movies}
                setMovies={setMovies}
                selected={selected}
                addFavori={addFavori}
                removeFavori={removeFavori}
                favorisTitle={favoris.map((f) => f.title)}
              />
            }
          />
          <Route
            path="/favoris"
            element={<Favoris favoris={favoris} removeFavori={removeFavori} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
