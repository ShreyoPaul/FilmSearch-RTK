import React from 'react'
import { useSelector } from 'react-redux'
import { getMovies } from '../feature/movieSlice'
import Moviecard from './Moviecard'

const Movies = () => {
  const movies = useSelector(getMovies)
  // console.log(movies)

  if (movies.Response === "True") {
    return (
      <div className=' flex md:flex-row flex-col flex-wrap justify-center items-center'>
      {movies.Search.map((item, id) => {
        return (
          // <div className='w-[100%] flex flex-row'>
            <Moviecard id={id} poster={item.Poster} title={item.Title} yr={item.Year} imdbId={item.imdbID} key={id}/>
          // </div>

        )
      })}
      </div>
    )
  }
  else {
    return (
      <div className='text-4xl'>Fetching data....</div>
    )
  }

}

export default Movies