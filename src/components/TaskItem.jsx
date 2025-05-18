import React from "react";
function TaskItem({task,onEditClick,onDeleteClick}){

    const {id,title,description,priority,dueDate} = task;

    const handleEditClick = ()=>{
        onEditClick(task)
    }
    const handleDeleteClick = () =>{
        onDeleteClick(id);
    }

    const displayDueDate = new Date(dueDate).toLocaleDateString();
    return(
        <>
        <div>
        <h3>Title: {title}</h3>
        {description && <p>Description: {description}</p>}
        <p>Due Date: {displayDueDate}</p>
        <p>Priority: {priority}</p>
        </div>

        <div>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>

        </>
    )

}
export default TaskItem