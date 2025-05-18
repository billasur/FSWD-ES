import React, { useState,useEffect } from 'react';

const intitialFromState = {
    title: '',
    description: '',
    priority: 'Medium',
    dueDate: '',
}

function TaskForm({onSaveTask, editingTask, onCancelEdit}){
    const [ formData,setFormData ] = useState(intitialFromState);

    useEffect(()=>{
        if(editingTask){
            setFormData({
                title: editingTask.title,
                description: editingTask.description,
                priority: editingTask.priority,
                dueDate: editingTask.dueDate,
            });
        } else {
            setFormData(intitialFromState);
        }

    },[editingTask]);

    const handleChange = (e) =>{
        const { name, value } = e.target;
        
        setFormData(prevData =>({
            ...prevData,[name]:value
        }))
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(editingTask){
            onSaveTask({...formData, id: editingTask.id})
        } else {
            onSaveTask(formData);
            setFormData(intitialFromState);
        }
    }

    const isEditing = Boolean(editingTask);

    return(
        <>
        <form onSubmit={handleSubmit}>
            <h2>{isEditing ? "Edit Task" : "Add a new Task"}</h2>
            <div>
                <label htmlFor='title'>Title: </label>
                <input 
                type='text' 
                id='title' 
                name='title' 
                value={formData.title} 
                onChange={handleChange} 
                required />
            </div>
            <div>
                <label htmlFor='description'>Description: </label>
                <textarea 
                id='description' 
                name='description' 
                value={formData.description} 
                onChange={handleChange} 
                required />
            </div>
            <div>
                <label htmlFor='priority'>Priority: </label>
                <select 
                id='priority' 
                name='priority' 
                value={formData.priority} 
                onChange={handleChange} 
                required >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>

            </div>
            <div>
                <label htmlFor='dueDate'>Due Date: </label>
                <input 
                type='date' 
                id='dueDate' 
                name='dueDate' 
                value={formData.dueDate} 
                onChange={handleChange} 
                required />
            </div>
            
            <div>
                <button type='submit'>
                    {isEditing ? "Edit task" : "Add task"}
                </button>
                {isEditing && <button type='button' onClick={onCancelEdit}> Cancel</button>}
            </div>

            
        </form>
        
        
        </>
    )


}

export default TaskForm