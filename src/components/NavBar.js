import React from 'react'
import { Link } from "react-router-dom"
import AddGameBtn from './AddGameBtn'

const NavBar = () => {

    //create mock user
    const user = null;

    return(
        <div className='font-share-tech-mono flex justify-center w-screen bg-[#1f1f1f]'>
            <div className='flex justify-between items-center w-full max-w-[1000px] p-8'>
                <div className='flex p-2'>
                    <Link to='/'>
                        <h1 className='text-cyan-400 font-bold text-3xl -4xl'>Video Game Library</h1>
                    </Link>
                </div>
                <div>
                    {user ? (
                        <div>
                            <div src={user.result.imageUrl} className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                {user.result.name.charAt(0)}
                                {/* <span className="font-medium text-gray-600 dark:text-gray-300">EC</span> */}
                            </div>
                            <div>{user.result.name}</div>
                            <button className="flex justify-center w-28 h-16 rounded-full border-solid border-2 border-white text-blue-300 text-center text-2xl hover:bg-violet-900">Log Out</button>
                        </div>
                    ) : (
                        // {Link} to="/auth"
                        <Link to='/auth'>
                        <button className="flex justify-center w-28 h-16 rounded-full border-solid border-2 border-white text-blue-300 text-center text-2xl hover:bg-violet-900">Sign In</button>
                        </Link>
                    )}
                </div>
                <div>
                    <AddGameBtn />
                </div>
            </div>
        </div>
    )
}

export default NavBar