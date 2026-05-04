import MovieCard from "./MovieCard";

function MovieList({ movies, deleteMovie }) {
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard 
          key={movie.id} 
          movie={movie} 
          deleteMovie={deleteMovie} 
        />
      ))}
    </div>
  );
}

export default MovieList;