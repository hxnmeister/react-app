import React from 'react';

const SearchMovies = ( {sortByName, sortByYear} ) => 
{
    return (
        <>
            <form action="" className='search-movie'>
                <input type="text" name="" id=""/>
                <button onClick={sortByName} type='button'>Sort by Title</button>
                <button onClick={sortByYear} type='button'>Sort by Year</button>
            </form>
        </>
    );
}

export default SearchMovies;
