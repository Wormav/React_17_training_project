import React, { useState } from "react";
import Header from "./components/Header/Header";
import MovieDetails from "./components/MoviesDetails/MovieDetails";
import MovieList from "./components/MoviesList/MovieList";

function App() {
  const [selected, setSelected] = useState(0);
  const [movies, setMovies] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const array = [
    {
      title: "The Godfather",
      img: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR3,0,140,209_AL_.jpg",
      details: "R | 175 min | Crime, Drama",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    },
    {
      title: "Apocalypse Now",
      img: "https://fr.web.img4.acsta.net/pictures/19/08/01/11/55/5421188.jpg",
      details: "R | 147 min | Drama, War",
      description:
        "During the Vietnam War, Captain Willard is sent on a dangerous mission into Cambodia to assassinate a renegade Colonel who has set himself up as a god among a local tribe.",
    },
    {
      title: "The Lord of the Rings",
      img: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR0,0,140,209_AL_.jpg",
      details: "PG-13 | 201 min | Action, Adventure, Drama",
      description:
        "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    },
    {
      title: "Gladiator",
      img: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY209_CR0,0,140,209_AL_.jpg",
      details: "R | 155 min | Action, Adventure, Drama",
      description:
        "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    },
  ];

  setTimeout(() => {
    setMovies(array);
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
        <h1>Chargement...</h1>
      )}
    </div>
  );
}

export default App;
