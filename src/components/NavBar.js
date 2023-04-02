import React from 'react'
import { Link } from "react-router-dom"
import AddGameBtn from './AddGameBtn'

const NavBar = () => {
    return(
        <div className='font-share-tech-mono flex justify-center w-screen bg-[#1f1f1f]'>
            <div className='flex justify-between items-center w-full max-w-[1000px] p-8'>
                <div className='flex p-2'>
                    <Link to='/'>
                        <h1 className='text-cyan-400 font-bold text-3xl -4xl'>Video Game Library</h1>
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