import React from 'react'
import { Link } from "react-router-dom"

const AddGameBtn = () => {
    return(
        <Link to='/new'>
            <div className="flex justify-center w-28 h-16 rounded-full border-solid border-2 border-white text-center text-xl hover:bg-purple-800">
                <div className="flex self-center text-cyan-400">Add New Game</div>
            </div>
        </Link>
    )
}

export default AddGameBtn