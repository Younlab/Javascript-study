import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {
  state = {}

  // 렌더링 된 후에 실행된다.
  componentDidMount(){
    this._getMovies();
  }

  // Movies component 에 데이터 전달
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

  // 비동기 ajax 메소드
  // 이 메소드가 실행되고 완료되지 않아도 다음 메소드를 실행하라
  _getMovies = async () =>{
    // await 은 this._callApi() 함수가 완료될때까지 기다린다.
    // await 은 위의 async 가 없으면 실행되지 않는다.
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  // 비동기 ajax 메소드
  _callApi = () =>{
    // 영화 API 에서 json 형식으로 데이터를 가져온다. get 요청
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')

    // 요청이 성동했을 경우
    .then(response => response.json())
    .then(json => json.data.movies)

    // 실해했을 경우 에러메세지 console 에 출력
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
        {/* this.state 에 데이터가 있으면 this._renderMovies() 를 실행하고 아니면 this._loading_Icon() 함수를 실행하라. */}
        {this.state.movies ? this._renderMovies() : this._loading_Icon()}
      </div>
    );
  }
}

export default App;
