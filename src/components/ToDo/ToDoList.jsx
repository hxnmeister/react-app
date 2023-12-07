import React, { useState } from 'react';
import AddToDo from './AddToDo';
import FilterToDo from './FilterToDo';
import ItemToDo from './ItemToDo';
import toDoItems from './toDoItems';
import './ToDo.css';
import { nanoid } from 'nanoid';

const ToDoList = () => 
{
    const [tasks, setTasks] = useState(toDoItems);

    const addTask = (title) => 
    {
        const newTasks = 
        [
            ...tasks, 
            {
                id: nanoid(), 
                title: title, 
                done: false
            } 
        ]

        setTasks(newTasks);
        console.log(newTasks);
    }
    const removeTask = (id) =>
    {
        setTasks(tasks.filter( item => item.id !== id ));
    }
    const toggleDoneTask = (id) =>
    {
        const newTasks = tasks.map( item => 
            {
                if(item.id === id) 
                { 
                    return {
                        ...item, 
                        done: !item.done
                    };
                } 
                else
                {
                    return item;
                }
            });

        setTasks(newTasks);
    }

    return (
        <div className='todo-list'>
            <h1 className='text-primary'>TODO LIST</h1>
            <p>Lorem ipsum dolor</p>

            <AddToDo addTask={addTask}/>
            <FilterToDo/>

            <div>
                {tasks.map((item) => <ItemToDo item={item} removeTask={removeTask} toggleDoneTask={toggleDoneTask} key={item.id}/>)}
            </div>
        </div>
    );
}

export default ToDoList;
