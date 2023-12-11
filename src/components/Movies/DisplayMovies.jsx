import React, { useState } from 'react';
import './style.css';
import movies from './movies';
import MovieCard from './MovieCard';
import SearchMovies from './SearchMovies';

const DisplayMovies = () => 
{
    const [moviesList, setMovie] = useState(movies);

    const SortByName = () => setMovie( [...moviesList].sort((a, b) => a.name.localeCompare(b.name)) );
    const SortByYear = () => setMovie( [...moviesList].sort((a, b) => a.year - b.year) );

    return (
        <>
            <SearchMovies sortByName={SortByName} sortByYear={SortByYear}/>

            <div className='movies-container'>
                { moviesList.map((movie, index) => <MovieCard movie={movie} key={index}/>) }
            </div>
        </>
    );
}

export default DisplayMovies;