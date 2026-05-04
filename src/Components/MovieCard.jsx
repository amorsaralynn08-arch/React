function MovieCard({ movie, addToDownloads }) {
  return (
    <div className="card">
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <small>{movie.desc}</small>

      <button onClick={() => addToDownloads(movie)}>
        📥 Download
      </button>
    </div>
  );
}

export default MovieCard;