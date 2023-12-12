import classNames from 'classnames';
import React, { useState } from 'react';

const ItemToDo = ({item, removeTask, toggleDoneTask, updateTask}) => 
{
    const [isEditing, setIsEditing] = useState(false);
    const [textEditing, setTextEditing] = useState(item.title);

    const saveHandler = () => 
    {
        if(textEditing.trim().length === 0)
        {
            alert('Text field cannot be empty!');
            setIsEditing(false);
            return;
        }

        updateTask(item.id, textEditing);
        setIsEditing(false);
    };
    const cancelHandler = () =>
    {
        setIsEditing(false);
        setTextEditing(item.title);
    }
    const keyHandler = (keyEvent) => 
    {
        if(keyEvent.key === 'Enter') saveHandler();
        else if(keyEvent.key === 'Escape') cancelHandler();
    }

    const viewTemplate = (<span className={ classNames({done: item.done}) } onClick={ () => setIsEditing(true) }>{item.title}</span>);
    const editTemplate = 
    (
        <div>
            <input type="text" autoFocus value={ textEditing } onChange={ (e) => setTextEditing(e.target.value) } onKeyDown={ keyHandler } onBlur={ saveHandler }/>
            <button type='button' onClick={ saveHandler }>save</button>
            <button type='button' onClick={ cancelHandler }>cancel</button>
        </div>
    );

    return (
        <div>
            <div className="task">
                <input type="checkbox" onClick={ () => toggleDoneTask(item.id) } defaultChecked={item.done}/>
                { isEditing ? editTemplate : viewTemplate }
                <button onClick={ () => removeTask(item.id) }>delete</button>
            </div>
        </div>
    );
}

export default ItemToDo;
