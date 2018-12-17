import React, { Component } from "react";
import Movie from "./components/Movie";
import "./App.css";

class App extends Component {
  state = {};
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "starwars",
            poster:
              "https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200"
          }
        ]
      });
    }, 3000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />;
    });
    return movies;
  };
  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "loading..."}
      </div>
    );
  }
}

export default App;
