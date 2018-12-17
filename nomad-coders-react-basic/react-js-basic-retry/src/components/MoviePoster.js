import React from "react";

const MoviePoster = ({ title, poster }) => {
  return (
    <div>
      <img src={poster} alt={title} />
    </div>
  );
};

export default MoviePoster;
