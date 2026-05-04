import { useState } from "react";
import AddMovieForm from "./Components/AddMovieForm";
import MovieList from "./Components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <>
      <h1>🎬 My Movie List</h1>

      <AddMovieForm addMovie={addMovie} />
      <MovieList movies={movies} deleteMovie={deleteMovie} />
      
    </>
  );
}

export default App;
    