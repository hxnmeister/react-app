import classNames from 'classnames';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';

const AddMovie = ({ addMovie, isActive, setIsActive }) => 
{
    const MIN_YEAR = 1895;
    const MAX_YEAR = new Date().getFullYear();
    const IMAGE_FORMATS = ['png', 'jpeg', 'jpg', 'webp'];
    
    const [poster, setPoster] = useState(null);
    const [movieTitle, setMovieTitle] = useState('');
    const [movieDirector, setMovieDirector] = useState('');
    const [movieYear, setMovieYear] = useState('');
    const [movieDescription, setMovieDescription] = useState('');

    const saveHandler = () =>
    {
        if(poster == null)
        {
            alert('Poster cannot be empty!');
        }
        else if(movieTitle.length < 5 )
        {
            alert('Title must have at least 5 characters!');
        }
        else if(movieDirector.length < 10)
        {
            alert('Director must have at least 10 characters');
        }
        else if(movieYear < MIN_YEAR || movieYear > MAX_YEAR)
        {
            alert(`Year cannot be less than ${MIN_YEAR} and greater than ${MAX_YEAR}!`);
        }
        else if(movieDescription.length < 10)
        {
            alert('Description must have at least 10 characters!');
        }
        else
        {
            addMovie
            (
                {
                    id: nanoid(),
                    name: movieTitle,
                    year: movieYear,
                    image: URL.createObjectURL(poster),
                    director: movieDirector,
                    description: movieDescription
                }
            );

            setPoster(null);
            setMovieYear('');
            setMovieTitle('');
            setMovieDirector('');
            setMovieDescription('');

            setIsActive(false);
        }
    };

    return (
        <div>
            <form action="" encType='multipart/formdata' className={classNames({ 'adding-form': isActive, 'adding-form-hidden': !isActive })}>
                <label htmlFor="title">Title:</label>
                <input type="text" id='title' value={movieTitle} onChange={ (e) => setMovieTitle(e.target.value) }/>

                <label htmlFor="director">Director:</label>
                <input type="text" id="director" value={movieDirector} onChange={ (e) => setMovieDirector(e.target.value) }/>

                <label htmlFor="year">Year:</label>
                <input type="number" id="year" min={MIN_YEAR} max={MAX_YEAR} value={movieYear} onChange={ (e) => setMovieYear(e.target.value) }/>

                <label htmlFor="description">Description:</label>
                <input type="text" id='decription' value={movieDescription} onChange={ (e) => setMovieDescription(e.target.value) } />

                <label htmlFor="poster">Poster (recommended 200x300 px):</label>
                <input type="file" id="poster" onChange={ (e) => IMAGE_FORMATS.includes(e.target.files[0].type.replace('image/', '')) && setPoster(e.target.files[0]) }/>

                <img src={ poster && URL.createObjectURL(poster)} alt="" />

                <button type='button' onClick={ saveHandler }>Submit</button>
            </form>
        </div>
    );
}

export default AddMovie;
