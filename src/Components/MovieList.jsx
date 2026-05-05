import MovieCard from "./MovieCard";

function MovieList({ movies, addToDownloads, downloads }) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          addToDownloads={addToDownloads}
          dowloads={downloads}
        />
      ))}
    </div>
  );
}

export default MovieList;