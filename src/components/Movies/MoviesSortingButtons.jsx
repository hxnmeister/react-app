import React from 'react';

const MoviesSortingButtons = ({ buttonName, setSortingOption }) => (<button type='button' onClick={ () => setSortingOption(buttonName) }>{buttonName}</button>);

export default MoviesSortingButtons;
