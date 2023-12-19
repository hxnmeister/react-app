import React, { useContext, useEffect, useReducer, useState } from 'react';
import AddToDo from './AddToDo';
import FilterToDo from './FilterToDo';
import ItemToDo from './ItemToDo';
import './ToDo.css';
import { nanoid } from 'nanoid';
import ProgressToDo from './ProgressToDo';
import toDoReducer from '../../reducers/toDoReducer';
import classNames from 'classnames';
import { themeContext } from '../../contexts/themeContext';

const ToDoList = () => 
{
    const FILTER_MAP = 
    {
        All: () => true,
        Done: (item) => item.done,
        ToDo: (item) => !item.done,
    };

    // const [tasks, setTasks] = useState([]);
    //dispatch при виклику повертає значення до tasks
    const { theme } = useContext(themeContext);
    const [tasks, dispatch] = useReducer(toDoReducer, []);
    const [filterOption, setFilterOption] = useState('All');

    useEffect(() => 
    {
        dispatch
        (
            {
                type: 'fill',
                payload: JSON.parse(localStorage.getItem('tasks')) || []
            }
        );
        // setTasks(JSON.parse(localStorage.getItem('tasks')) || []);
    }, []); 

    //useEffect застосовується при перерендері елемента, якщо вказати залежності то тільки після зміни значення залежності
    useEffect(() => 
    {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (title) => 
    {
        dispatch
        (
            {
                type: 'add',
                payload:
                {
                    id: nanoid(), 
                    title: title, 
                    done: false,
                }
            }
        );

        // const newTasks = 
        // [
        //     ...tasks, 
        //     {
                
        //     } 
        // ]
        
        // setTasks(newTasks);
    }
    const removeTask = (id) =>
    {
        dispatch
        (
            {
                type: 'delete',
                payload: id
            }
        );
        // const newTasks = tasks.filter( item => item.id !== id );
        // setTasks(newTasks);
    }
    const toggleDoneTask = (id) =>
    {
        dispatch
        (
            {
                type: 'toggleDone',
                payload: id
            }
        );
        // const newTasks = tasks.map( item => 
        //     {
        //         if(item.id === id) 
        //         { 
        //             return {
        //                 ...item, 
        //                 done: !item.done
        //             };
        //         } 
        //         else
        //         {
        //             return item;
        //         }
        //     });

        // setTasks(newTasks);
    }
    const updateTask = (currentId, newTitle) =>
    {
        dispatch
        (
            {
                type: 'update',
                payload: 
                {
                    id: currentId,
                    title: newTitle
                }
            }
        );

        // const newTasks = tasks.map( item => 
        //     {
        //         if(item.id === id) 
        //         { 
        //             return {
        //                 ...item, 
        //                 title: newTitle,
        //             };
        //         } 
        //         else
        //         {
        //             return item;
        //         }
        //     });

        // setTasks(newTasks);
    }

    return (
        <div className={classNames('todo-list', {dark: theme === 'dark'})}>
            <h1 className='text-primary'>TODO LIST</h1>
            <p>Lorem ipsum dolor</p>

            <AddToDo addTask={addTask}/>
            <FilterToDo filterOption={filterOption} setFilterOption={setFilterOption} FILTER_MAP={FILTER_MAP}/>

            <div>
                {tasks.filter(FILTER_MAP[filterOption]).map((item) => <ItemToDo item={item} removeTask={removeTask} toggleDoneTask={toggleDoneTask} updateTask={updateTask} key={item.id}/>)}
            </div>

            <ProgressToDo tasksAmount={tasks.length} tasksDone={tasks.filter( item => item.done === true ).length}/>
        </div>
    );
}

export default ToDoList;
