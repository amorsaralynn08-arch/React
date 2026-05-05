import { useState } from "react";
import MovieList from "./Components/MovieList";
import "./App.css";

const initialMovies = [
  { id: 1, title: "Inception", year: 2010, genre: "Sci-Fi", desc: "Dream manipulation and heists" },
  { id: 2, title: "John Wick", year: 2014, genre: "Action", desc: "Retired assassin returns for revenge" },
  { id: 3, title: "The Dark Knight", year: 2008, genre: "Crime", desc: "Batman vs Joker battle" },
  { id: 4, title: "Interstellar", year: 2014, genre: "Sci-Fi", desc: "Space exploration to save humanity" },
  { id: 5, title: "Avengers", year: 2012, genre: "Action", desc: "Superhero team assembles" },
  { id: 6, title: "Joker", year: 2019, genre: "Crime", desc: "Origin story of Joker" },
  { id: 7, title: "Titanic", year: 1997, genre: "Drama", desc: "Love story on a sinking ship" },
  { id: 8, title: "Avatar", year: 2009, genre: "Sci-Fi", desc: "Alien world conflict" },
  { id: 9, title: "The Matrix", year: 1999, genre: "Sci-Fi", desc: "Reality is a simulation" },
  { id: 10, title: "Fast & Furious", year: 2001, genre: "Action", desc: "Street racing and crime" },

  { id: 11, title: "Gladiator", year: 2000, genre: "Action", desc: "Roman warrior revenge story" },
  { id: 12, title: "The Godfather", year: 1972, genre: "Crime", desc: "Mafia family legacy" },
  { id: 13, title: "Fight Club", year: 1999, genre: "Drama", desc: "Secret underground fight society" },
  { id: 14, title: "Forrest Gump", year: 1994, genre: "Drama", desc: "Life story of a simple man" },
  { id: 15, title: "Shutter Island", year: 2010, genre: "Thriller", desc: "Psychological mystery case" },
  { id: 16, title: "The Prestige", year: 2006, genre: "Thriller", desc: "Magician rivalry" },
  { id: 17, title: "Django Unchained", year: 2012, genre: "Western", desc: "Slave turned bounty hunter" },
  { id: 18, title: "Pulp Fiction", year: 1994, genre: "Crime", desc: "Interconnected crime stories" },
  { id: 19, title: "The Lion King", year: 1994, genre: "Animation", desc: "Lion cub becomes king" },
  { id: 20, title: "Frozen", year: 2013, genre: "Animation", desc: "Sisters and ice powers" },

  { id: 21, title: "Toy Story", year: 1995, genre: "Animation", desc: "Toys come alive" },
  { id: 22, title: "Mad Max: Fury Road", year: 2015, genre: "Action", desc: "Post-apocalyptic chase" },
  { id: 23, title: "Deadpool", year: 2016, genre: "Action", desc: "Comedy anti-hero mercenary" },
  { id: 24, title: "Black Panther", year: 2018, genre: "Action", desc: "Wakanda superhero king" },
  { id: 25, title: "Doctor Strange", year: 2016, genre: "Sci-Fi", desc: "Magic and multiverse" },
  { id: 26, title: "Spider-Man", year: 2002, genre: "Action", desc: "Teen becomes superhero" },
  { id: 27, title: "The Social Network", year: 2010, genre: "Drama", desc: "Facebook creation story" },
  { id: 28, title: "Whiplash", year: 2014, genre: "Drama", desc: "Music student obsession" },
  { id: 29, title: "Her", year: 2013, genre: "Sci-Fi", desc: "Love with AI system" },
  { id: 30, title: "Gravity", year: 2013, genre: "Sci-Fi", desc: "Survival in space" },

  { id: 31, title: "No Country for Old Men", year: 2007, genre: "Crime", desc: "Deadly drug deal gone wrong" },
  { id: 32, title: "The Revenant", year: 2015, genre: "Drama", desc: "Survival revenge story" },
  { id: 33, title: "Bird Box", year: 2018, genre: "Thriller", desc: "Survive by not seeing" },
  { id: 34, title: "A Quiet Place", year: 2018, genre: "Horror", desc: "Survive in silence" },
  { id: 35, title: "It", year: 2017, genre: "Horror", desc: "Clown horror story" },
  { id: 36, title: "The Nun", year: 2018, genre: "Horror", desc: "Demonic entity haunting" },
  { id: 37, title: "Oppenheimer", year: 2023, genre: "Drama", desc: "Atomic bomb creator story" },
  { id: 38, title: "Barbie", year: 2023, genre: "Comedy", desc: "Barbie world adventure" },
  { id: 39, title: "Top Gun: Maverick", year: 2022, genre: "Action", desc: "Elite fighter pilot return" },
  { id: 40, title: "Everything Everywhere All at Once", year: 2022, genre: "Sci-Fi", desc: "Multiverse chaos story" }
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
      <h1> Movie Library</h1>
      

      <div className="nav">
        <button onClick={() => setView("all")}>All Movies</button>
        
       <button onClick={() => setView("downloads")}>
  View Downloads
</button>

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
        downloads={downloads}
      />
    </div>
  );
}

export default App;