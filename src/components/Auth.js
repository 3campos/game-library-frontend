import React, { useState } from 'react';

const Auth = (props) => {
    // const [userSignUp, setSignUp] = useState(false);

    // const handleChange = (e) => {
    //     e.preventDefault()
    // }

    // const switchMode = () => {
    //     setSignUp((prevSignUp) => !prevSignUp);
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // }; 

    const googleLogin = () => {
        window.open("https://game-library-backend-ec.herokuapp.com/auth/google", "_self");
    }
    
    return (
    <div>
        <div className="font-share-tech-mono bg-gray-600 min-h-screen flex flex-col justify-start items-start box-border">
            <div className="w-full max-w-[1000px] items-center">
                <h1 className='text-blue-400 font-bold text-4xl my-8 mx-8 pl-[70px]'>
                    Auth Page
                </h1>
                {/* <div>
                {props.userName} is signed in!
                </div> */}
                {/* <div className= 'pl-16'>
                    {userSignUp ? <input
                    type='file'
                    name="file_upload"
                    onChange={this.handleChange}
                    className="border grid grid-cols-1 gap-3 justify-normal w-1/3 text-base"
                    >
                    </input> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-12 ml-24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>}
                </div>
                <div className="pl-36 py-2 text-2xl">
                    {userSignUp ? 'Sign Up' : 'Sign In'}
                </div> */}

                {/* <form 
                onSubmit={handleSubmit}
                > */}
                    <div className="w-1/3 pl-20 py-2">
                            <button className='w-32 h-16 ml-10 rounded-full border-solid border-2 border-white text-blue-300 bg-white hover:bg-slate-100' onClick={googleLogin}>
                                <div className="inline-flex">
                                        <div>
                                            <svg className="w-4 h-4 mr-2 mt-[13px]" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                                <path fill="blue" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z">
                                                </path>
                                            </svg>
                                        </div>
                                        <span className='text-lg mt-2'>Sign In</span>
                                </div>
                            </button>
                        </div>
                        {/* {
                        userSignUp && (
                            <div className="pl-16 pr-4 grid grid-cols-1 gap-3 justify-normal w-1/3 text-xl">
                                <input
                                name="firstName"
                                label="First Name"
                                placeholder="First Name"
                                handleChange={handleChange}
                                >
                                </input>
                                <input
                                name="lastName"
                                label="Last Name"
                                placeholder="Last Name"
                                handleChange={handleChange}
                                >
                                </input>
                            </div>
                        )} */}
                        {/* <div className="pl-16 pr-4 pt-2 grid grid-cols-1 gap-3 justify-normal w-1/3 text-xl">
                        <input name="email" label="Email Address" placeholder="Email Address" 
                        // handleChange={handleChange} 
                        type="email"></input>
                        
                        <input name="password" label="Password" placeholder="Password"
                        // handleChange={handleChange} 
                        type="password"></input>

                        {userSignUp && <input name="confirmPassword" label="Repeat Password" placeholder="Confirm Password" handleChange={handleChange} type="password"></input>}

                        </div> */}
                        
                        {/* <div className="pl-[135px] pt-4 pb-2">
                            <button
                            type='submit'
                            className='w-28 h-16 rounded-full border-solid border-2 border-white text-blue-300 text-center text-base hover:bg-violet-900'
                           >{userSignUp ? 'Sign Up' : 'Sign In'}</button>
                        </div> */}
                        {/* <div className="grid grid-cols-1 pt-2 pl-12 justify-items-center w-1/3"> */}
                        {/* <button className="items-center w-48 h-16 rounded-md border-solid border-2 border-white text-blue-300 text-center text-base hover:bg-violet-900" onClick={switchMode}>
                            {userSignUp ? 'Already have an account? Sign in.' : "Don't have an account? Sign up."}
                        </button> */}
                        {/* </div> */}
                {/* </form> */}
            </div>
        </div>
    </div>
    )
}

export default Auth