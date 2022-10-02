import React from "react";
import Header from "./components/Header/Header";
import MovieDetails from "./components/MoviesDetails/MovieDetails";
import MovieList from "./components/MoviesList/MovieList";

function App() {
  return (
    <div className="App d-flex flex-column">
      <Header />
      <div className="d-flex flex-row flex-fill pt-4 p-2">
        <MovieList />
        <MovieDetails />
      </div>
    </div>
  );
}

export default App;
