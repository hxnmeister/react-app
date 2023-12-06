import React from 'react';
import './style.css';
import films from './films';
import MovieCard from './MovieCard';
import SearchMovies from './SearchMovies';

const DisplayMovies = () => 
{
    return (
        <>
            <SearchMovies/>

            <div className='films-container'>
                {films.map((movie, index) => <MovieCard movie={movie} key={index}/>)}
            </div>
        </>
    );
}

export default DisplayMovies;