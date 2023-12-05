import React from 'react';
import AddToDo from './AddToDo';
import FilterToDo from './FilterToDo';
import ItemToDo from './ItemToDo';
import toDoItems from './toDoItems';
import './ToDo.css';

const ToDoList = () => 
{
    return (
        <div className='todo-list'>
            <h1 className='text-primary'>TODO LIST</h1>
            <p>Lorem ipsum dolor</p>

            <AddToDo/>
            <FilterToDo/>

            <div>
                {toDoItems.map((item) => <ItemToDo item={item} key={item.id}/>)}
            </div>
        </div>
    );
}

export default ToDoList;
