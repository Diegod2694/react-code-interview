import React from 'react'

const SwapiList = (props) => {
    return <ul>
         {
            props.data.map(e => {
                return (
                    <li key={e.name}>
                       <p>name: {e.name} / height: {e.height}</p>
                    </li>
                )
            })
         }
    </ul>
}

export default SwapiList
