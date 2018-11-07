import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
        return (
            <div>
                <h1>i'm Movie</h1>
                <MoviePoster/>

            </div>
        );
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src='https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fnews.tongplus.com%2Fsite%2Fdata%2Fimg_dir%2F2015%2F07%2F09%2F2015070901250_0.jpg&f=1'/>
        )
    }
}

export default Movie;