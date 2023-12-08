import React from 'react';

const ProgressToDo = ( {tasksAmount, tasksDone} ) => 
{
    return (
        <>
            <div className='progressBar'>
                <div className='progress' style={{width: `${Math.floor( (tasksDone / tasksAmount) * 100)}%`}}>
                </div>
                <span>{tasksDone} / {tasksAmount} tasks done</span>
            </div>
        </>
    );
}

export default ProgressToDo;
