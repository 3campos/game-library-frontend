import React from 'react'
import { Link } from "react-router-dom"
import AddGameBtn from './AddGameBtn'
import axios from 'axios';

const NavBar = (props) => {

    const logout = () => {
        axios.get("https://game-library-backend-ec.herokuapp.com/logout", {withCredentials: true})
        .then(
            window.location.href = "https://game-library-frontend.herokuapp.com/"
        )
        .then(
            this.props.userGoogleId="",
            this.props.userObject="",
            this.props.userName="",
            this.props.uniqueDbId=""
        )
    }

    return(
        <div className='font-share-tech-mono flex flex-row justify-center w-screen bg-[#1f1f1f] sm: max-w-screen'>
            <div className='flex items-center w-full max-w-[1000px] p-3'>
                <div className='flex w-3/5 shrink text-ellipsis overflow-hidden'>
                    <Link to='/'>
                        <div className='text-cyan-400 text-2xl pr-1'>Video Game Library</div>
                    </Link>
                </div>
                <div className="flex flex-row justify-end w-full">
                    <div>
                        {props.userName ? (
                            <div className='inline-flex'>
                                <button className="inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-2 mt-3 text-cyan-400">
                                    {props.userName.charAt(0)
                                    }
                                </button>
                                <button className="flex justify-center w-[95px] h-16 rounded-full border-solid border-2 border-white text-center text-xl hover:bg-purple-800 sm: text-lg sm: w-20" onClick={logout}>
                                    <div className="flex self-center text-cyan-400">
                                    Log Out
                                    </div>
                                </button>
                                <div className="pl-2">
                                    <AddGameBtn />
                                </div>
                            </div>
                        ) : (
                            <div className='inline-flex'>
                                <div className="mr-2">
                                    <AddGameBtn />
                                </div>
                                <Link to='register'>
                                    <div className="flex justify-center w-[95px] h-16 rounded-full border-solid border-2 border-white text-center text-xl hover:bg-purple-800">
                                        <div className="flex self-center text-cyan-400">
                                        Sign Up
                                        </div>
                                    </div>
                                </Link>
                                <Link to='auth'>
                                    <div className="flex justify-center w-[95px] h-16 rounded-full border-solid border-2 border-white text-center text-xl hover:bg-purple-800 ml-2">
                                        <div className="flex self-center text-cyan-400">
                                        Sign In
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default NavBar