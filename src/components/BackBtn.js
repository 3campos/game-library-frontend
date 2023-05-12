import React from 'react'
import { Link } from "react-router-dom"

const BackBtn = () => {
    return (
        <Link 
            to='/'
            className=''
        >
            <div className="flex justify-center w-24 h-16 rounded-full border-solid border-2 border-white text-blue-300 text-center text-2xl hover:bg-violet-900">
                <p>Return Home</p>
            </div>
        </Link>
    )
}

export default BackBtn