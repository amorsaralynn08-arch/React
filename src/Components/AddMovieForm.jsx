import { useState } from 'react';

function AddMovieForm({ addMovie }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      id: Date.now(),
      title,
      year
    };

    addMovie(newMovie);

    setTitle("");
    setYear("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Movie title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovieForm;