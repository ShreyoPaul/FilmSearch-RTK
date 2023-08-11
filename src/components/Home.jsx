import React from 'react'
import Movies from './Movies'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchMovies } from '../feature/movieSlice'

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const search = "All"
    dispatch(fetchMovies(search))
  }, [dispatch])
  // dispatch(addMovies(data))
  return (
    <div className='text-4xl w-[100%] flex flex-col md:flex-row justify-center items-center flex-wrap '>
      <Movies />
    </div>
  )
}

export default Home