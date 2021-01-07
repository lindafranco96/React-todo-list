import React from 'react'
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faCheckCircle } from '@fortawesome/free-solid-svg-icons' */

const Header = ({ setStatus }) => {
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        <header className="header">
            <h1 className="header__title">To-Do List</h1>
            <div className="header__select">
                <select onChange={statusHandler} name="todos" id="" className="header__select-options">
                    <option value="all" className="header__select-option">All</option>
                    <option value="completed" className="header__select-option">Completed</option>
                    <option value="uncompleted" className="header__select-option">Uncompleted</option>
                </select>
            </div>
        </header>
    );
}

export default Header;