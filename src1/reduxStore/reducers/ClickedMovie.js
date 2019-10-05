import * as types from '../actionTypes';


const initialState = null;


export const ClickedMovie = (state=initialState, action) => {


    switch (action.type) {
        case types.KLICKED_MOVIES:

            return action.payload;

        default:
            return state;
    }
};
