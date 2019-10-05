import React, {Component} from 'react';
import "./MoreInformation.css";
import {connect} from "react-redux";
import {oneMovieGetter} from "../../reduxStore/actions";
import {Link} from "react-router-dom";

const POSTER_LINK = 'http://image.tmdb.org/t/p/w185//';
const   baseUrl =`https://api.themoviedb.org/3/search/movie?api_key=4cb67c1569e1110dc0111a06061e2efd&query=`;

class MoreInformation extends Component {



    async componentDidMount() {

        await this.props.oneMovieGetter(baseUrl+this.props.selectedMovie);
        
    }


    render() {
        console.log(this.props.oneMovie);

        return (
            <div className={"mWrapper"}>
            <div className={'mContainer'}>
                <div className={"mImage"}>
                    <img src={`${POSTER_LINK}${this.props.oneMovie.backdrop_path}`} alt="MoviesPhoto"/>
                </div>

                <div className={"overview"}>
                    <p> Name - {this.props.oneMovie.title}</p>
                    <p> Original language - {this.props.oneMovie.original_language}</p>
                    <p> Release date - {this.props.oneMovie.release_date}                                                                                                                                       </p>
                    <p> Overview - {this.props.oneMovie.overview} </p>

                </div>

            </div>
                <Link to="/Hall">
                    <button >Bay ticket</button>
                </Link>
            </div>
        );
    }
}


const mapStateToProps = state => {
    console.log(state);
    return {
        oneMovie: state.movieReducer.oneMovie,
        selectedMovie :state.ClickedMovie,
    }
};
export default connect(mapStateToProps, {oneMovieGetter})(MoreInformation);
