import React, { useMemo, useRef, useState } from 'react';
import IsFive from './IsFive';
// import Forma from '../Forma/Forma';

const Counter = () => 
{
    //при перерендере "заново происходит вызов" функции Counter
    const [count, setCount] = useState(0);
    const [some, setSome] = useState(true);

    const click = useRef(0);
    const btn = useRef(null);

    const decrement = () => count !== 0 && setCount(count - 1);
    const increment = () => 
    {
        setCount(count + 1);
        console.log(++click.current);
        btn.current.style.background = 'red';
    }
    
    const factorialCount = useMemo( () => factorial(count), [count]);

    return (
        <div>
            <button onClick={ decrement }>-</button>
            {count}
            <button onClick={ increment }>+</button>
            <button onClick={ () => setCount(count + 2) }> +2 </button>
            <hr />
            
            Factorial: {factorialCount}
            <br />
            <button onClick={ () => setSome(!some) } ref={btn}>Change Some State</button>

            <IsFive count={count}/>
            {/* <Forma/> */}
        </div>
    );
}

const factorial = (number) =>
    {
        // console.log('factorial');

        if(number === 0 || number === 1)
        {
            return number;
        }
        else
        {
            return number * factorial(number - 1);
        }
    }

export default Counter;
