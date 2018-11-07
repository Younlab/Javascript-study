import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <MoviePoster image={this.props.image} title={this.props.title}/>

            </div>
        );
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src={this.props.image} alt={this.props.title}/>
        )
    }
}

export default Movie;