import * as types from '../actionTypes';


const initialState = {
    allMovies:[],
    oneMovie:{}
};


export const movieReducer = (state=initialState, action) => {


    switch (action.type) {
        case types.FETCH_MOVIES:
            return {...state, allMovies:action.payload};
        case types.FETCH_SINGLE_MOVIE:
            return {...state,oneMovie:action.payload};

        default:
            return state;
    }
};
