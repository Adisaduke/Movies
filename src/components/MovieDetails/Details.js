import React from 'react'
import Left from './Left'
import Right from './Right'
import './Details.css'
import { useParams } from 'react-router-dom'
import { TmdbContext } from '../API/TmdbContext'

function Details() {

  const movies = TmdbContext();
  const { id } = useParams()
  

  if (!movies) {
    return <div>Loading...</div>
  }

  const selectedMovie = movies.find((movie) => movie.id.toString() === id)

  return (
    <div className='movie-details'>
      <Left />
      {selectedMovie ? (<Right movie={selectedMovie} />)
        : (<div>Movies not found</div>)
      }

    </div>
  )
}

export default Details