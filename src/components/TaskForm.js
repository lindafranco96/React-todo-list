import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import ColorBox from './ColorBox'
import allColors from './allColors'
import styled from 'styled-components'

const ColorsContainer = styled.div`
        width: 200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto .5rem;
`

const TaskForm = ({ tasks, changeTasks, colorSelected, setColorSelected }) => {
    const [inputTask, changeInputTask] = useState('')

    const handleInput = (e) => {
        changeInputTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputTask === '') {
            return
        } else {
            changeTasks(
                [
                    ...tasks,
                    {
                        id: uuidv4(),
                        text: inputTask,
                        completed: false,
                        color: colorSelected
                    }
                ]
            )
            changeInputTask('')
        }
    }

    const handleChangeColor = (color) => {
        setColorSelected(color)
    }

    return (
        <form action="" className="taskform" onSubmit={handleSubmit}>
            <input
                type="text"
                className="taskform__input"
                placeholder="Enter Task"
                value={inputTask}
                onChange={(e) => handleInput(e)}
            />
            <ColorsContainer>
                {
                    allColors.colors.map((color) => (
                        <ColorBox
                            handleChangeColor={handleChangeColor}
                            key={uuidv4()}
                            color={color}
                            isChecked={colorSelected === color}
                        />
                    ))
                }
            </ColorsContainer>
            <div className="taskform__submit">
                <button
                    type="submit"
                    className="taskform__submit-button"
                >
                    <FontAwesomeIcon icon={faPlusSquare} className="taskform__submit-button-icon" />
                </button>
            </div>
        </form>
    );
}

export default TaskForm;