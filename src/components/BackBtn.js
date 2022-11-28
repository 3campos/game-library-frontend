import React from 'react'
import { Link } from "react-router-dom"

const BackBtn = () => {
    return (
        <Link 
            to='/'
            className=''
        >
            <div className="flex justify-center w-1/5 rounded-full border-solid border-2 border-white text-blue-800 text-center text-2xl">
                <p>Return Home</p>
            </div>
        </Link>
    )
}

export default BackBtn