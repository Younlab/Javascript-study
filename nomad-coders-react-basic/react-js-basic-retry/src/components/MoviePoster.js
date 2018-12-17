import React from "react";

const MoviePoster = ({ poster }) => {
  return (
    <div>
      <img src={poster} alt="starwars" width="100%" />
    </div>
  );
};

export default MoviePoster;
