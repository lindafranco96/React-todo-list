import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import allColors from './components/allColors'

function App() {
  const savedTasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []

  const [tasks, changeTasks] = useState(savedTasks)
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([])
  const [colorSelected, setColorSelected] = useState(allColors.colors[0])

  // Functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(tasks.filter((task) => task.completed === true))
        break
      case 'uncompleted':
        setFilteredTodos(tasks.filter((task) => task.completed === false))
        break
      default:
        setFilteredTodos(tasks)
        break
    }
  }

  // useEffect
  useEffect(() => {
    filterHandler()
  }, [tasks, status])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks, status])

  useEffect(() => {
    localStorage.setItem('completed', JSON.stringify(filteredTodos))
  }, [filteredTodos])

  return (
    <div className="container">
      <Header
        setStatus={setStatus}
      />
      <TaskForm
        tasks={tasks}
        changeTasks={changeTasks}
        colorSelected={colorSelected}
        setColorSelected={setColorSelected}
      />
      <TaskList
        tasks={tasks}
        changeTasks={changeTasks}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
