import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieDetail, getMovieDetails, removeSelectedMovie } from '../feature/movieSlice'

const MovieDetils = () => {
    const { imdbID } = useParams()
    const dispatch = useDispatch()
    const data = useSelector(getMovieDetails)
    console.log("IMDB: ", data)
    useEffect(() => {
        dispatch(fetchMovieDetail(imdbID))

        return () => {
            dispatch(removeSelectedMovie())
        }
    }, [dispatch, imdbID])

    return (
        <div className='flex  w-[1348px] h-[515px] justify-center items-center'>
            {
                Object.keys(data).length === 0 ? (<span>Loading...</span>)
                    : (<>
                        <div className="flex w-[1200px] h-[100%] justify-left items-center flex-col  bg-gray-200 border border-gray-300 rounded-lg shadow md:flex-row  border:bg-gray-100 ">
                            <img className=" mr-5 w-[350px] rounded-t-lg h-[100%] md:rounded-none md:rounded-l-lg" src={`${data.Poster}`} alt="" />
                            <div className="flex flex-col justify-between mt-5 p-6 leading-normal">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.Title}</h5>
                                <div>
                                    <span className='pr-5 font-semibold'><span className='pr-2 font-semibold'>IMDB Rating :</span>{data.imdbRating}</span>
                                    <div className="mb-3 pr-5 font-semibold  text-gray-700 dark:text-gray-400"><span className='pr-2 font-semibold'>Released date :</span>{data.Released}</div>
                                    <div className=" pr-5 font-semibold  text-gray-700 dark:text-gray-400"><span className='pr-2 font-semibold'>Actors :</span>{data.Actors}</div>
                                    <div className=" pr-5 font-semibold  text-gray-700 dark:text-gray-400"><span className='pr-2 font-semibold'>Director :</span>{data.Director}</div>
                                    <div className=" pr-5 font-semibold  text-gray-700 dark:text-gray-400"><span className='pr-2 font-semibold'>RunTime :</span>{data.Runtime}</div>
                                    <div className=" pr-5  font-semibold  text-gray-700 dark:text-gray-400"><span className='pr-2 font-semibold'>Languages :</span>{data.Language}</div>
                                    <div className=" pr-5  font-semibold  text-gray-700 dark:text-gray-400"><span className='pr-2 font-semibold'>Genre :</span>{data.Genre}</div>
                                    <div className=" pr-5  font-semibold  text-gray-700 dark:text-gray-400"><span className='pr-2 font-semibold'>Awards :</span>{data.Awards}</div>
                                    <div className=" pr-5  font-semibold  text-gray-700 dark:text-gray-400"><span className='pr-2 font-semibold'>Writer :</span>{data.Writer}</div>
                                    <div className=" pr-5  font-semibold  text-gray-700 dark:text-gray-400"><span className='pr-2 font-semibold'>Box Office :</span>{data.BoxOffice}</div>

                                </div>
                                <span className='mt-5'>
                                    {
                                        data.Plot.length < 800 ? <span className='text-sm font-light'>{data.Plot}</span> : <span className='italic'>Description is not available!</span>
                                    }
                                </span>
                            </div>
                        </div>
                    </>)
            }
        </div>
    )
}


export default MovieDetils