import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../api/movieApi'



export const fetchMovies = createAsyncThunk('movieStore/fetchMovie', async (search) => {
    const movie = search ? search : "All"
    const APIKEY = "9e622154"
    try {
        let res = await movieApi.get(`?apikey=${APIKEY}&s=${movie}&type=movie`)
        // console.log(res.data.Search)
        return res.data
    } catch (error) {
        console.log("Error:\n", error)
    }
})

export const fetchMovieDetail = createAsyncThunk('movieStore/fetchMovieDetail', async (id) => {
    const APIKEY = "9e622154"
    try {
        let res = await movieApi.get(`?apikey=${APIKEY}&i=${id}&Plot=full`)
        // console.log(res.data.Search)
        return res.data
    } catch (error) {
        console.log("Error:\n", error)
    }
})



const initialState = {
    movies: {},
    movieDetail : {}
}

const movieSlice = createSlice({
    name: 'movieStore',
    initialState,
    reducers: {
        removeSelectedMovie : (state) => {
            state.movieDetail = {}
        }
    },
    extraReducers : {
        [fetchMovies.pending] : ()=> {
            // console.log("pending...")
        },
        [fetchMovies.fulfilled] : (state, { payload }) => {
            // console.log("fetched",payload)
            return {...state, movies : payload}
        },
        [fetchMovies.rejected] : () => {
            // console.log("rejected")
        },
        [fetchMovieDetail.pending] : ()=> {
            // console.log("pending...")
        },
        [fetchMovieDetail.fulfilled] : (state, { payload }) => {
            // console.log("fetched")
            return {...state, movieDetail : payload}
        },
    }
})

export const getMovies = (state) => {
    return state.movies.movies
}

export const getMovieDetails = (state) => {
    return state.movies.movieDetail
}

export const { removeSelectedMovie } = movieSlice.actions
export default movieSlice.reducer