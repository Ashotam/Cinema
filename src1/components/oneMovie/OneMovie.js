import React from 'react';
import './OneMovie.css';
import {Link} from "react-router-dom";

const POSTER_LINK = 'http://image.tmdb.org/t/p/w185//';

const titleFixer = (title) => {

    if (title.length <= 15) return title;

    let newTitle = title.trim().slice(0, 15).split(" ");


    if (title[15] !== " ") {
        newTitle.pop();
    }

    return newTitle.join(' ');
};

const OneMovie = ({obj,click}) => {
    return (
        <div className={"OneMovie"}>
            <img src={`${POSTER_LINK}${obj.poster_path}`} alt="MoviesPhoto"/>
            <div> {titleFixer(obj.title)}</div>
            <Link  onClick={click} to={`/moreInformation/${obj.original_title}`}> show more</Link>
        </div>
    );
};

export default OneMovie;
