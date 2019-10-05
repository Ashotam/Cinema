import React, {Component} from 'react';
import {connect} from "react-redux";
import {oneMovieGetter} from "../../reduxStore/actions";
const POSTER_LINK = 'http://image.tmdb.org/t/p/w185//';
const   baseUrl =`https://api.themoviedb.org/3/search/movie?api_key=4cb67c1569e1110dc0111a06061e2efd&query=`;
class Hall extends Component {
    async componentDidMount() {

        await this.props.oneMovieGetter(baseUrl+this.props.selectedMovie);

    }

    render() {
        return (
            <div>
                ticket for- {this.props.oneMovie.title}
                <img src={`${POSTER_LINK}${this.props.oneMovie.backdrop_path}`} alt="MoviesPhoto"/>
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
export default connect(mapStateToProps, {oneMovieGetter})(Hall);