import React from 'react';

const ItemToDo = ({item}) => 
{
    return (
        <div>
            <div className="task">
                <input type="checkbox" defaultChecked={item.done}/>
                <span>{item.title}</span>
                <button>delete</button>
            </div>
        </div>
    );
}

export default ItemToDo;
