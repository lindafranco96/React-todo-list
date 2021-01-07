import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { faCheckCircle, faEdit, faTimesCircle, faCircle } from '@fortawesome/free-solid-svg-icons'

const Task = ({ task, toggleCompleted, editTask, deleteTask, color }) => {
    const [editingTask, changeEditingTask] = useState(false)
    const [newTask, changeNewTask] = useState(task.text)

    const handleSubmit = (e) => {
        e.preventDefault()
        editTask(task.id, newTask)
        changeEditingTask(false)
    }

    return (
        // <li className="tasklist__task">
        <TaskContainer color={color} className="tasklist__task">
            <FontAwesomeIcon
                icon={task.completed ? faCheckCircle : faCircle}
                className="tasklist__icon tasklist__icon-check"
                onClick={() => toggleCompleted(task.id)}
            />
            <div className="tasklist__text">
                {
                    editingTask ?
                        <form action="" className="form-edit-task" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                className="form-edit-task__input"
                                value={newTask}
                                onChange={(e) => changeNewTask(e.target.value)}
                            />
                            <button
                                type="submit" className="form-edit-task__btn"
                            >
                                Update
                            </button>
                        </form>
                        : task.text
                }
            </div>
            <div className="tasklist__container-buttons">
                <FontAwesomeIcon
                    icon={faEdit}
                    className="tasklist__icon tasklist__icon-action"
                    onClick={() => changeEditingTask(!editingTask)}
                />
                <FontAwesomeIcon
                    icon={faTimesCircle}
                    className="tasklist__icon tasklist__icon-action"
                    onClick={() => deleteTask(task.id)}
                />
            </div>
        </TaskContainer>
        // </li>
    );
}

const TaskContainer = styled.div`
    padding: 20px;
    margin: 0 20px 10px 20px;
    font-size: 20px;
    color: #4B4B4B;
    display: grid;
    grid-template-columns: auto 1fr auto;
    background-color: ${({ color }) => color};
    border-radius: 5px;
`



export default Task;