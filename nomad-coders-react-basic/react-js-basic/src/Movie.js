import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';

// 함수형 컴포넌트, 멍청한 컴포넌트, state 가 없는 컴포넌트, this.props로 data를 전달받지 않고 key로 데이터를 전달받는다.
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