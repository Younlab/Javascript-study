import React from "react";
import MoviePoster from "./MoviePoster";
import "./styles/Movie.css";
import PropTypes from "prop-types";

const Movie = ({ title, poster }) => {
  return (
    <div>
      <h2>{title}</h2>
      <MoviePoster title={title} poster={poster} />
    </div>
  );
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;
