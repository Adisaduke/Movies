import React, { Fragment, useEffect } from 'react'
import MovieDetails from './MovieDetails'
import './MoviesLists.css'
import Footer from '../Footer/Footer'

function MoviesLists() {
    return (
        <div className='topList_movies'>
            <div className='featured_movies'>
                <p>Featured Movie</p>
                <p>See more</p>
            </div>
            <div>
                <MovieDetails />
            </div>
            <Footer />
        </div>
    )
}

export default MoviesLists