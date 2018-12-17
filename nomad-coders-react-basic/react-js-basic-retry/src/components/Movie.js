import React, { Component } from "react";
import MoviePoster from "./MoviePoster";
import "./styles/Movie.css";

class Movie extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <MoviePoster poster={this.props.poster} />
      </div>
    );
  }
}

export default Movie;
