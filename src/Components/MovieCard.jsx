function MovieCard({ movie, deleteMovie }) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>

      <button onClick={() => deleteMovie(movie.id)}>
        Delete ❌
      </button>
    </div>
  );
}

export default MovieCard;