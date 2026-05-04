import MovieCard from "./MovieCard";

function MovieList({ movies, addToDownloads }) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          addToDownloads={addToDownloads}
        />
      ))}
    </div>
  );
}

export default MovieList;