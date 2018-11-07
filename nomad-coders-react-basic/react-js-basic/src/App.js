import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {
  state = {}

  componentDidMount(){
    this._getMovies();
  }
  _renderMovies = ()=>{
    const movies = this.state.movies.map(movie =>{
      console.log(movie);
      return <Movie
        title={movie.title_english}
        poster={movie.medium_cover_image}
        genres={movie.genres}
        synopsis={movie.synopsis}
        key={movie.id}/>
    })

    return movies
  }

  _getMovies = async () =>{
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }
  _callApi = () =>{
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }


  _loading_Icon = () =>{
    
    return (
    <div>
      <svg width="200" height="200">
        <rect id="square13" x="38%" y="40%" width="20" height="20" style={{fill:"black"}} />
        <rect id="square14" x="50%" y="40%" width="20" height="20" style={{fill:"black"}}  />
        <rect id="square15" x="62%" y="40%" width="20" height="20" style={{fill:"black"}}  />
        <rect id="square16" x="38%" y="52%" width="20" height="20" style={{fill:"black"}}  />
        <rect id="square17" x="50%" y="52%" width="20" height="20" style={{fill:"black"}}  />
        <rect id="square18" x="62%" y="52%" width="20" height="20" style={{fill:"black"}}  />
        <rect id="square19" x="38%" y="64%" width="20" height="20" style={{fill:"black"}}  />
        <rect id="square20" x="50%" y="64%" width="20" height="20" style={{fill:"black"}}  />
        <rect id="square21" x="62%" y="64%" width="20" height="20" style={{fill:"black"}}  />
      </svg>
    </div>
    )

  }


  render() {
    return (
      <div className='App'>
        {/* {JSON.stringify(this.state)} */}
        {this.state.movies ? this._renderMovies() : this._loading_Icon()}
      </div>
    );
  }
}

export default App;
