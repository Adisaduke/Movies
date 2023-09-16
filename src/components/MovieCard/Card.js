import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom'

const Card = (props) => {
    const getPictureURL = (posterPath) => {
        return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterPath}`;
    };

    const { poster_path, release_date, title, vote_average, vote_count, tag } = props.movie;

    return (
        <div className='movie_card' data-testid="movie-card">
            <img data-testid='movie-poster' className='poster_image' src={getPictureURL(poster_path)} alt='' />
            <div data-testid='movie-release-date' className='year'>{release_date}</div>
            <div data-testid='movie-title' className='title'>{title}</div>
            <div className='ratings'>

                <div className='rating'><i class="fa-brands fa-imdb"></i>{vote_average}</div>
                <div className='percentage'><i className="fas fa-users"></i>{vote_count}</div>

            </div>
            <div className='tag'>Action, Drama, History</div>
        </div>
    );
};

export default Card;
