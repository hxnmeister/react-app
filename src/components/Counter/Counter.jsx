import React, { useState } from 'react';
import Forma from '../Forma/Forma';

const Counter = () => 
{
    const [count, setCount] = useState(0);

    const decrement = () => { if(count !== 0) setCount(count - 1); } 
    const increment = () => { setCount(count + 1); } 

    return (
        <div>
            <button onClick={ decrement }>-</button>
            {count}
            <button onClick={ increment }>+</button>

            <button onClick={ () => setCount(count + 2) }> +2 </button>

            <Forma/>
        </div>
    );
}

export default Counter;
