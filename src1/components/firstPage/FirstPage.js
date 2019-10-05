import React, {Component} from 'react';
import {connect} from 'react-redux';
import {moviesGetter,getClickedMovie} from "../../reduxStore/actions";
import OneMovie from "../oneMovie/OneMovie";
import './FirstPage.css';




const KEY = '4cb67c1569e1110dc0111a06061e2efd';
const API = `https://api.themoviedb.org/3/movie/now_playing?api_key=${KEY}&page=1`;





class FirstPage extends Component {

    toggleEvent = (tit) => {

        this.props.getClickedMovie(tit)
    };
    pagePainter = (arr) => {

        return arr && arr.map(i => <OneMovie click={()=>this.toggleEvent(i.title)} key={i.id} obj={i}/>)
    };

    render() {

        return (
            <div className={'container'}>
                {this.pagePainter(this.props.allMovies)}
            </div>
        );
    }


    async componentDidMount() {
        await this.props.moviesGetter(API);

    }
}


const mapStateToProps = state => {

    return {
        allMovies: state.movieReducer.allMovies,
    }
};


export default connect(mapStateToProps, {moviesGetter,getClickedMovie})(FirstPage);
