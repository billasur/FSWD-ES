import React, { useState } from 'react';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleAddTask = (taskDataFromForm)=>{
    const newTask = {...taskDataFromForm, id:Date.now().toString()};
    setTasks([...tasks,newTask]);
  }

  const handleUpdateTask = (updatedTaskData) =>{
    setTasks(tasks.map(task =>(task.id === updatedTaskData.id ? updatedTaskData : task)));
    setTaskToEdit(null);
  }

  const handleDeleteTask = (taskIdToBeDeleled)=>{
    setTasks(tasks.filter(task => task.id !== taskIdToBeDeleled));
    
    if(taskToEdit && taskToEdit.id == taskIdToBeDeleled){
      setTaskToEdit(null);
    }
  }

  const handleSelectTaskToEdit = (task)=>{
    setTaskToEdit(task)
  }

  const handleCancelTaskToEdit = () =>{
    setTaskToEdit(null);
  }
  return (
    <>
    <h1>Daily Task Planner</h1>
      <TaskForm 
      onSaveTask = {taskToEdit ? handleUpdateTask : handleAddTask}
      editingTask = {taskToEdit}
      onCancelEdit = {handleCancelTaskToEdit}
      />

      <TaskList
      tasks = {tasks}
      onEditTask = {handleSelectTaskToEdit}
      onDeleteTask = {handleDeleteTask}
      />

    </>
  )
}

export default App
