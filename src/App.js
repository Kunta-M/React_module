import './App.css'
import {useEffect} from "react";
import {getMovies} from "./services/movieService";
import {useDispatch, useSelector} from "react-redux";
import MoviesList from "./components/MoviesList";
import Header from "./components/Header";
import {getGenres} from "./services/genreService";

export default function App() {

    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let {movies, genres} = state;

    useEffect(() => {
        getMovies().then(value => dispatch(discoverMovie(value.data.results)));
    }, []);

    useEffect(() =>{
        getGenres().then(value => dispatch(chooseGenre(value.data.genres)))
    }, []);

    const discoverMovie = (value) =>{
        return {type: 'GET_MOVIES', payload: value}
    }

    const chooseGenre = (value) =>{
        return {type: 'GET_GENRES', payload: value}
    }

    return (
        <div>
            <Header genres={genres}/>
            <MoviesList movies={movies}/>
        </div>
    );
}
