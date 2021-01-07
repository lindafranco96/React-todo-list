import React from 'react'
import styled from 'styled-components'

const LabelColor = styled.label`
    display:inline-block;
    width:40px;
    height:40px;
    margin-top:.5rem;
    background-color: ${({ color }) => color};
    border-radius: 5px;
`

const InputRadio = styled.input`
    display:none;
    &:checked + label{
        border: 4px solid rgba(219, 57, 57, 0.25);
    }
`

const ColorBox = ({ color, handleChangeColor, isChecked }) => (
    <>
        <InputRadio
            defaultChecked={isChecked}
            id={color}
            type="radio"
            name="color"
            onChange={() => handleChangeColor(color)}
        />
        <LabelColor htmlFor={color} color={color}></LabelColor>
    </>

)

export default ColorBox