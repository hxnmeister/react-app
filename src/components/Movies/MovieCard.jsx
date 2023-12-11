import React, { useState } from 'react';
import classNames from 'classnames';

const MovieCard = ({ movie }) => 
{
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div className="movie-card">
                <img src={movie.image} alt="No image!"/>
                <p>Title: <span>{movie.name}</span></p>
                <p>Director: <span>{movie.director}</span></p>
                <p>Year: <span>{movie.year}</span></p>
                <button onClick={ () => setIsActive(!isActive) }>Details</button>
                <textarea cols="10" rows="10" readOnly value={ movie.description } className={ classNames( {'display-description': isActive, 'hide-description': !isActive} ) }></textarea>
            </div>
        </>
    );
}

export default MovieCard;
