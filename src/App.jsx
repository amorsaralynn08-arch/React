import { useState } from "react";
import MovieList from "./Components/MovieList";
import "./App.css";

const initialMovies = [
  { id: 1, title: "Inception", year: 2010, genre: "Sci-Fi", desc: "Dream manipulation" },
  { id: 2, title: "John Wick", year: 2014, genre: "Action", desc: "Revenge action" },
  { id: 3, title: "The Dark Knight", year: 2008, genre: "Crime", desc: "Batman vs Joker" },
  { id: 4, title: "Interstellar", year: 2014, genre: "Sci-Fi", desc: "Space journey" }
];

function App() {
  const [movies] = useState(initialMovies);
  const [downloads, setDownloads] = useState([]);
  const [view, setView] = useState("all");
  const [genre, setGenre] = useState("All");

  const addToDownloads = (movie) => {
    if (!downloads.find((m) => m.id === movie.id)) {
      setDownloads([...downloads, movie]);
    }
  };

  const filteredMovies =
    genre === "All"
      ? movies
      : movies.filter((m) => m.genre === genre);

  const displayedMovies =
    view === "downloads" ? downloads : filteredMovies;

  return (
    <div>
      <h1>🎬 Movie Library</h1>

      <div className="nav">
        <button onClick={() => setView("all")}>All Movies</button>
        <button onClick={() => setView("downloads")}>📥 Downloads</button>

        <select onChange={(e) => setGenre(e.target.value)}>
          <option value="All">All Genres</option>
          <option value="Crime">Crime</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Action">Action</option>
        </select>
      </div>

      {/* THIS IS WHERE MOVIECARD IS USED (inside MovieList) */}
      <MovieList
        movies={displayedMovies}
        addToDownloads={addToDownloads}
      />
    </div>
  );
}

export default App;