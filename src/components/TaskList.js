import React from 'react'
import Task from './Task'

const TaskList = ({ tasks, changeTasks, filteredTodos }) => {
    const toggleCompleted = (id) => {
        changeTasks(tasks.map((task) => {
            if (task.id === id) {
                return { ...task, completed: !task.completed }
            }
            return task
        }))
    }

    const editTask = (id, newTask) => {
        changeTasks(tasks.map((task) => {
            if (task.id === id) {
                return { ...task, text: newTask }
            }
            return task
        }))
    }

    const deleteTask = (id) => {
        changeTasks(tasks.filter((task) => {
            if (task.id !== id) {
                return task
            }
            return
        }))
    }

    return (
        <ul className="tasklist">
            {
                filteredTodos.length > 0 ? filteredTodos.map((task) => {
                    return <Task
                        key={task.id}
                        task={task}
                        toggleCompleted={toggleCompleted}
                        editTask={editTask}
                        deleteTask={deleteTask}
                        color={task.color}
                    />
                })
                    : <div className="tasklist__message">~ No Tasks Added ~</div>
            }
        </ul>
    );
}

export default TaskList;