import React, {useState, useEffect} from "react";

export default function List() {
  const [movies, setMovies] = useState([]);
  const [open, setOpen] = useState();

  useEffect(() => {
  fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(data => setMovies(data));
  }, [] );
  
  return <ul>
    {movies.map(movie =>
	<li onClick={() => setOpen(movie)}>
	{movie.Title}
	{open && open.Title === movie.Title && <span>{movie.Description}</span>}
	</li>)}
    </ul>;
}
