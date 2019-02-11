import React from "react";
import { Link } from "react-router-dom";
const Movie = ({ id, title, rating, poster }) => (
  <Link to={`/details/${id}`}>
    <div>
      <h3>{title}</h3>
      <img src={poster} alt={title} />
      <div>{rating}</div>
    </div>
  </Link>
);

export default Movie;
