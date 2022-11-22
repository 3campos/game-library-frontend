import React from 'react'
import { Link } from "react-router-dom"

const BackBtn = () => {
    return (
        <Link 
            to='/'
            className=''
        >
            <div>
                <p>Home</p>
            </div>
        </Link>
    )
}

export default BackBtn