import React from 'react'
import { Link } from "react-router-dom"
import AddGameBtn from './AddGameBtn'
import axios from 'axios';

let userURL = process.env.REACT_APP_BACKEND_USERS_URL
let searchUsers = '';

const NavBar = (props) => {

    const logout = () => {
        axios.get("https://game-library-backend-ec.herokuapp.com/logout", {withCredentials: true})
        .then(
            window.location.href = "https://game-library-frontend.herokuapp.com/"
        )
    }

    return(
        <div className='font-share-tech-mono flex flex-row justify-center w-screen bg-[#1f1f1f]'>
            <div className='flex items-center w-full max-w-[1000px] p-8'>
                <div className='flex pr-20'>
                    <Link to='/'>
                        <h1 className='text-cyan-400 font-bold text-3xl -4xl'>Video Game Library</h1>
                    </Link>
                </div>
                <div className="flex flex-row pl-[320px]">
                    <div>
                        {fetch(userURL)
                            .then((res) => {
                              if (res.status ===200) {
                                return res.json();
                              } else {
                                return [];
                              }
                            })
                            .then((data) => {
                                //obtaining data from database and updating state when the component mount
                                // data.allUsers?.map((user, index) =>  {
                                //   if(user.googleId != props.uniqueId){
                                //     <Link to='auth'>
                                //     <div className="flex justify-center w-28 h-16 rounded-full border-solid border-2 border-white text-center text-xl hover:bg-purple-800">
                                //         <div className="flex self-center text-cyan-400">
                                //         Sign Up
                                //         </div>
                                //     </div>
                                //     </Link>
                                //   }})
                                searchUsers = data.allUsers?.find(item => item.googleId == props.currentId)
                                if(searchUsers.googleId == props.currentId){
                                    {props.userName ? (
                                        <div className='inline-flex'>
                                            <button className="inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-2 mt-3 text-cyan-400">
                                                {props.userName.charAt(0)
                                                }
                                            </button>
                                            <button className="flex justify-center w-28 h-16 rounded-full border-solid border-2 border-white text-center text-xl hover:bg-purple-800" onClick={logout}>
                                                <div className="flex self-center text-cyan-400">
                                                Log Out
                                                </div>
                                            </button>
                                            <div className="pl-2">
                                                <AddGameBtn />
                                            </div>
                                        </div>
                                    ) : (
                                        // {Link} to="/auth"
                                        <Link to='auth'>
                                        <div className="flex justify-center w-28 h-16 rounded-full border-solid border-2 border-white text-center text-xl hover:bg-purple-800">
                                            <div className="flex self-center text-cyan-400">
                                            Sign Up/In
                                            </div>
                                        </div>
                                        </Link>
                                    )}
                                }
                                })
                                }
                        
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default NavBar