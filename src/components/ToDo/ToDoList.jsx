import React, { useState } from 'react';
import AddToDo from './AddToDo';
import FilterToDo from './FilterToDo';
import ItemToDo from './ItemToDo';
import toDoItems from './toDoItems';
import './ToDo.css';
import { nanoid } from 'nanoid';
import ProgressToDo from './ProgressToDo';

const ToDoList = () => 
{
    const [tasks, setTasks] = useState(toDoItems);
    const [tasksAmount, setTasksAmount] = useState(tasks.length);
    const [tasksDone, setTasksDone] = useState(tasks.filter( item => item.done === true ).length)

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
        updateTaskBar(newTasks);
    }
    const removeTask = (id) =>
    {
        const newTasks = tasks.filter( item => item.id !== id );

        setTasks(newTasks);
        updateTaskBar(newTasks);
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
        updateTaskBar(newTasks);
    }

    const updateTaskBar = (updatedTask) => 
    {
        setTasksAmount(updatedTask.length);
        setTasksDone(updatedTask.filter( item => item.done === true ).length);
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

            <ProgressToDo tasksAmount={tasksAmount} tasksDone={tasksDone}/>
        </div>
    );
}

export default ToDoList;
