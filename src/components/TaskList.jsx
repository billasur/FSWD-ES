import React from "react";
import TaskItem from './TaskItem';

function TaskList({tasks,onEditTask,onDeleteTask}){
    if (tasks.length === 0) {
        return <p className="no-tasks">No tasks yet. Add one using the form above!</p>;
    }
    return(
        <>
        <h2> My tasks</h2>
        <div>
            {
            tasks.map((task) =>{
                return(
                    <TaskItem
                    key={task.id}
                    task ={task}
                    onEditClick={onEditTask}
                    onDeleteClick={onDeleteTask}
                    />)
            })
        }

        </div>
        </>
    )
}

export default TaskList;
