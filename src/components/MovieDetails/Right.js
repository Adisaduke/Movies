import React from 'react';
import './Right.css';
import { TmdbContext } from '../API/TmdbContext';
import { useParams } from 'react-router-dom';

function Right() {
    const { id } = useParams();
    const movies = TmdbContext();

    // Find the movie with the matching ID
    const selectedMovie = movies.find((movie) => movie.id.toString() === id);

    // Check if the movie exists
    if (!selectedMovie) {
        return <div>Loading...</div>; // or display a "Movie not found" message
    }

    return (
        <div className='right-bar'>
            <div className='rightbar-container'>
                <div className='video_image'>
                    <img data-testid='movie-overview' className='details-image' src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${selectedMovie.poster_path}`} alt={selectedMovie.title} />
                </div>
                <div className='video_content'>
                    {/* left side */}
                    <div className='left-side'>
                        <div className='video-details'>
                            <div data-testid='movie-release-date' className='videoDetail-title'><span>{selectedMovie.title}</span> . <span data-testid='movie-release-date'>{selectedMovie.release_date}</span> . <span data-testid='movie-runtime'>PG-13 . 2h 10m</span></div>
                            <div className='action'>
                                <p>Action</p>
                                <p>drama</p>
                            </div>
                        </div>
                        <div className='movie-description'>
                            <p className='movieDetails-description'>{selectedMovie.overview}</p>
                            <p className='movieDetailInfo'>Director: <span>{selectedMovie.director}</span></p>
                            <p className='movieDetailInfo'>Writers: <span>{selectedMovie.writers}</span></p>
                            <p className='movieDetailInfo'>Stars: <span>{selectedMovie.stars}</span></p>
                        </div>
                        <div className='nomination'>
                            <div className='top-rated'>Top rated movie #65</div>
                            <div className='selection'>
                                <select name="genre-selection">
                                    <option value="action" selected>Action</option>
                                    <option value="drama">Drama</option>
                                    <option value="comedy">Comedy</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* right side */}
                    <div className='right-side'>
                        <div>
                            <div className='detail-rating'>
                                <p>⭐ <span>{selectedMovie.rating}</span><span>|</span> {selectedMovie.vote_count}</p>
                            </div>
                            <div className='showtime'>
                                <div className='showtimes'>See Showtimes</div>
                                <div className='watch-more'>More watch options</div>
                            </div>
                        </div>
                        <div className='topRated-images'>
                            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${selectedMovie.poster_path}`} alt={selectedMovie.title} />
                            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${selectedMovie.poster_path}`} alt={selectedMovie.title} />
                            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${selectedMovie.poster_path}`} alt={selectedMovie.title} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Right;
