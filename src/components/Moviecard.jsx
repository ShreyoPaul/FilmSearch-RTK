import React from 'react'
import { Link } from 'react-router-dom'

const Moviecard = ({ id, poster, title, yr, imdbId }) => {
    return (
        
            <Link to={`/${imdbId}`} key={id}  className="lg:w-[20%] w-[300px]  m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
                <img className="w-full h-[350px] rounded-t-lg" src={poster} alt="" />
            </div>
            <div className="p-5">
                <div>
                    <h5 className="mb-1 lg:text-2xl md:text-[22px] leading-6 h-[75px] font-semibold tracking-tight text-gray-800 dark:text-white">{title}</h5>
                </div>
                <p className='text-gray-400 text-xl'>{yr}</p>
            </div>
        </Link>

  )
}

export default Moviecard