import React from 'react';

const MovieCard = ({ movie }) => 
{
    return (
        <>
            <div className="film">
                <img src={movie.image} alt="No image!" />
                <p>Title: <span>{movie.name}</span></p>
                <p>Director: <span>{movie.director}</span></p>
                <p>Year: <span>{movie.year}</span></p>
            </div>
        </>
    );
}

export default MovieCard;
