import classNames from 'classnames';
import React from 'react';

const FilterButton = ({ name, setFilterOption, isPressed }) => (<button onClick={ () => setFilterOption(name) } className={ classNames({ 'active': isPressed}) }>{ name }</button>)

export default FilterButton;
