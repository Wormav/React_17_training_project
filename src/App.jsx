import React, { useCallback, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Movies from "./features/movies/Movies";
import Favoris from "./features/favoris/Favoris";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import apiMovie, { apiMovieMap } from "./conf/api.movie";
import apiFirebase from "./conf/api.firebase";

function App() {
  const [selected, setSelected] = useState(0);
  const [movies, setMovies] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [favoris, setFavoris] = useState(null);

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

    await apiFirebase.get("favoris.json").then((response) => {
      let favorisData = response.data ? response.data : [];
      setFavoris(favorisData);
    });
  }, []);

  useEffect(() => {
    setLoaded(favoris ? true : false && movies ? true : false);
  }, [movies, favoris]);

  useEffect(() => {
    getData();
  }, [getData]);

  const addFavori = (title) => {
    const favoriData = favoris.slice();
    const movieAdded = movies.find((m) => m.title === title);
    favoriData.push(movieAdded);
    setFavoris(favoriData);
    saveFaroris();
  };

  const removeFavori = (title) => {
    const favoriData = favoris.slice();
    const indexRemoveMovie = favoriData.findIndex((f) => f.title === title);
    favoriData.splice(indexRemoveMovie, 1);
    setFavoris(favoriData);
    saveFaroris();
  };

  function saveFaroris() {
    apiFirebase.put("favoris.json", favoris);
  }

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
                favorisTitle={favoris}
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
                favorisTitle={favoris}
              />
            }
          />
          <Route
            path="/favoris"
            element={
              <Favoris
                favoris={favoris}
                removeFavori={removeFavori}
                loaded={loaded}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
