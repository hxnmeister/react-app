import React, { useEffect, useReducer, useState } from 'react';
import './style.css';
import movies from './movies';
import MovieCard from './MovieCard';
import SearchMovies from './SearchMovies';
import moviesReducer from '../../reducers/moviesReducer';
import AddMovie from './AddMovie';

const DisplayMovies = () => 
{
    const MOVIES_SORTING = 
    {
        Default: () => true,
        ByName: (a, b) => a.name.localeCompare(b.name),
        ByYear: (a, b) => a.year - b.year,  
    };

    const [sortingOption, setSortingOption] = useState('Default');
    const [isActive, setIsActive] = useState(false);
    const [moviesList, dispatch] = useReducer(moviesReducer, []);

    useEffect(() => 
    {
        dispatch
        (
            {
                type: 'fill',
                payload: JSON.parse(localStorage.getItem('moviesList'))
            }
        );
    }, []);
    useEffect(() => 
    {
        localStorage.setItem('moviesList', JSON.stringify(moviesList));
    }, [moviesList]);

    const addMovie = (newMovie) => 
    {
        dispatch
        (
            {
                type: 'add',
                payload: newMovie,
            }
        );
    };

    return (
        <>
            <SearchMovies sortingOption={sortingOption} setSortingOption={setSortingOption} MOVIES_SORTING={MOVIES_SORTING} setIsActive={setIsActive}/>

            <div className='movies-container'>
                { moviesList.sort(MOVIES_SORTING[sortingOption]).map((movie, index) => <MovieCard movie={movie} key={index}/>) }
            </div>

            <AddMovie addMovie={addMovie} isActive={isActive} setIsActive={setIsActive}/>
        </>
    );
}

export default DisplayMovies;