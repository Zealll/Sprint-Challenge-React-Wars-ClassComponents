import React from 'react'
import StarWars from './StarWars'

const List = props => {
    return(
        <div className='list'>
            {props.charList.map(charList => <StarWars charList={charList} key={charList.created}/>)}
        </div>
    )
}

export default List