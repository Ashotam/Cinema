import * as types from './actionTypes';
import axios from "axios";


export const moviesGetter = (url) =>async dispatch => {

   const response =await axios.get(url);
    return dispatch({
        type:types.FETCH_MOVIES,
        payload:response.data.results,
    })
};

export const oneMovieGetter = (url) =>async dispatch => {

   const response =await axios.get(url);

    return dispatch({
        type:types.FETCH_SINGLE_MOVIE,
        payload:response.data.results[0],
    })
};


export const getClickedMovie = title => {
    return {
        type:types.KLICKED_MOVIES,
        payload:title
    }
};
