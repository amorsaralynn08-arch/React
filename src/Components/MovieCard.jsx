function MovieCard({ movie, addToDownloads, downloads }) {
    const isDownloaded = downloads?.some((m)=> m.id === movie.id);
  return (
    <div className="card">
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <small>{movie.desc}</small>

      <button onClick={() => addToDownloads(movie)}
        className={isDownloaded ? "downloaded" : ""}
        disabled={isDownloaded}>
         {isDownloaded ? "Downloaded" : "Download"}
      </button>
    </div>
  );
}

export default MovieCard;