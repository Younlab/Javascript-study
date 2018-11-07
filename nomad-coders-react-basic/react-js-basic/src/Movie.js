import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';


function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie">
        <div className="Movie-wrap">
        <div className="Movie-Columns">
                <MoviePoster poster={poster} title={title}/>
            </div>
            <div className="Movie-Columns">
                <h1>{title}</h1>
                <div className="Movie-Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
                </div>
                <p className="Movie-Synopsis">{synopsis}</p>
            </div>
        </div>

            
        </div>
    );
}

function MoviePoster({poster, title}){
    return(
        <img src={poster} alt={title} title={title} className="Movie-Poster"/>
    );
}

function MovieGenre({genre}){
    return(
        <span className="Movie-Genre">{genre} </span>
    )
}

Movie.propTypes = {
    poster:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    genres:PropTypes.array.isRequired,
    synopsis:PropTypes.string.isRequired,
}

MoviePoster.propTypes = {
    poster:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
}

MovieGenre.propTypes = {
    genre:PropTypes.string.isRequired
}

export default Movie;