import React from 'react';
import MoviesSortingButtons from './MoviesSortingButtons';

const SearchMovies = ( {setSortingOption, MOVIES_SORTING, setIsActive} ) => 
{
    return (
        <>
            <form action="" className='search-movie'>
                <span>Sorting options:</span>
                {Object.keys(MOVIES_SORTING).map( (buttonName, index) => buttonName !== 'Default' && <MoviesSortingButtons buttonName={buttonName} setSortingOption={setSortingOption} key={index}/>)}
                <button type='button' onClick={ () => setIsActive(true) } className='add-movie-button'>Press to Add a Movie</button>
            </form>
        </>
    );
}

export default SearchMovies;
