import React, { Component } from 'react'
import { Link } from "react-router-dom"
import AddGameBtn from './AddGameBtn'

const NavBar = () => {
    return(
        <div>
            <div>
                <div>
                    <Link to='/'>
                        <h1>Video Game Library</h1>
                    </Link>
                </div>
                <div>
                    <AddGameBtn />
                </div>
            </div>
        </div>
    )
}

export default NavBar