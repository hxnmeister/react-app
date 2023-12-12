import React from 'react';
import FilterButton from './FilterButton';

const FilterToDo = ({ filterOption, setFilterOption, FILTER_MAP}) => {
    const buttonNames = Object.keys(FILTER_MAP);

    return (
        <div>
            {buttonNames.map( (item) => <FilterButton name={item} setFilterOption={setFilterOption} isPressed={filterOption === item} key={item}/> )}
        </div>
    );
}

export default FilterToDo;
