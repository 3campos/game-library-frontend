import React from 'react'
import { Link } from "react-router-dom"

const AddGameBtn = () => {
    return(
        <Link to='/new'>
            <div className="p-2 rounded-full border-solid border-2 border-white text-center font-share-tech-mono">
                <div className="text-end text-cyan-400">Add New Game</div>
            </div>
        </Link>
    )
}

export default AddGameBtn