import classNames from 'classnames';
import React from 'react';

const ItemToDo = ({item, removeTask, toggleDoneTask}) => 
{
    return (
        <div>
            <div className="task">
                <input type="checkbox" onClick={ () => toggleDoneTask(item.id) } defaultChecked={item.done}/>
                <span className={ classNames({done: item.done}) }>{item.title}</span>
                <button onClick={ () => removeTask(item.id) }>delete</button>
            </div>
        </div>
    );
}

export default ItemToDo;
