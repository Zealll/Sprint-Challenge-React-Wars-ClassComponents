import React from 'react'
import './StarWars.css'

const StarWars = props =>{
    return (
        <div className='starWars'>
            <div className='flex'>
                <div className='elements'>
                    <p><strong>Name:</strong> {props.charList.name}</p>
                </div>
                <div className='elements'>
                    <p><strong>DOB:</strong> {props.charList.birth_year}</p>
                </div>
                <div className='elements'>
                    <p><strong>Sex:</strong> {props.charList.gender}</p>
                </div>
                <div className='elements'>
                    <p><strong>Eye Color:</strong> {props.charList.eye_color}</p>
                </div>
                <div className='elements'>
                    <p><strong>Height:</strong> {props.charList.height}</p>
                </div>
            </div>
        </div>
    )
}

export default StarWars