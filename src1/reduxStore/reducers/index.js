import {combineReducers} from "redux";
import {movieReducer} from "./movieReducer";
import {ClickedMovie} from './ClickedMovie';


export default combineReducers({
    movieReducer,
    ClickedMovie
})
