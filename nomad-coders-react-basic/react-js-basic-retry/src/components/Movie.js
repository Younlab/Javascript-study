import React from "react";
import MoviePoster from "./MoviePoster";
import "./styles/Movie.css";
import PropTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";
const Movie = ({ title, poster, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <MoviePoster title={title} poster={poster} />
      <LinesEllipsis
        text={description}
        maxLine="2"
        ellipsis="..."
        trimRight
        basedOn="letters"
      />
    </div>
  );
};

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

export default Movie;
