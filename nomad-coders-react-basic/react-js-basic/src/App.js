import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitle = [
  "Matrix",
  "Full Metal Jackert",
  "Old Boy",
  "Star Wars",
]

const movieImage = [
  "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fclm.or.kr%2Ftechnote7%2Fdata%2Fboard%2Fcwvmovie%2Ffile%2F1%2Fe65e6e3f_b445200.jpg&f=1",
  "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimgmovie.naver.com%2Fmdi%2Fmi%2F0116%2FA1671-00.jpg&f=1",
  "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fenter361.files.wordpress.com%2F2011%2F10%2Faaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.jpg&f=1",
  "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fmoonhak.co.kr%2Fhome%2Fwp-content%2Fuploads%2Fbookcover%2F%EC%8A%A4%ED%83%80%EC%9B%8C%EC%A6%88-%EB%85%B8%EB%B8%945_%ED%91%9C1_web.jpg&f=1"

]

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Movie title={movieTitle[0]} image={movieImage[0]}/>
        <Movie title={movieTitle[1]} image={movieImage[1]}/>
        <Movie title={movieTitle[2]} image={movieImage[2]}/>
        <Movie title={movieTitle[3]} image={movieImage[3]}/>
      </div>
    );
  }
}

export default App;
