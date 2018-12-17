import React, { Component } from "react";
import Movie from "./components/Movie";
import axios from "axios";
import "./App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getApiAxios } from "./components/actions";

class App extends Component {
  // state = {};

  componentDidMount() {
    this.props.getApiAxios();
  }
  componentDidUpdate() {
    console.log("update", this.props.movies[0]);
  }

  _getMovies = async () => {
    // await 뒤에 오는 함수가 실행되고 끝났을때 다음 함수가 실행된다.(성공적으로 끝났든, 실패로 끝났든 완료되기를 기다린다.)
    const movies = await this._callAPI();
    this.setState({
      movies
    });
  };

  _callAPI = () => {
    return axios
      .get(`https://yts.am/api/v2/list_movies.json?sort_by=download_count`)
      .then(response => {
        const result = response.data.data.movies;
        console.log(result);
        return result;
      })
      .catch(err => {
        console.log(err);
      });
  };
  _renderMovies = () => {
    const movies = this.props.movies[0].map(movie => {
      return (
        <Movie
          title={movie.title}
          poster={movie.medium_cover_image}
          description={movie.description_full}
          key={movie.id}
        />
      );
    });
    return movies;
  };
  render() {
    return (
      <div className="App">
        {this.props.movies[0] ? this._renderMovies() : "loading..."}
      </div>
    );
  }
}

function mapStateToProps({ movies }) {
  return {
    movies
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getApiAxios }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
