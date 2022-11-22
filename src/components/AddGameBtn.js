import React from 'react'
import { Link } from "react-router-dom"

const AddGameBtn = () => {
    return(
        <Link to='/new'>
            <div>
                <div>Add</div>
                <p>New Game</p>
            </div>
        </Link>
    )
}

export default AddGameBtn