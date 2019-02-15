import React from 'react'

const StarWars = props =>{
    return (
        <div className='starWars'>
            {props.charList.birth_year}
        </div>
    )
}

export default StarWars