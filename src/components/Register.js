import React from 'react';

const Reg = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }; 

    const googleRegister = () => {
        window.open("https://game-library-backend-ec.herokuapp.com/auth/google", "_self");
    }
    
    return (
    <div>
        <div className="font-share-tech-mono bg-gray-600 min-h-screen flex flex-col justify-start items-start box-border">
            <div className="w-full max-w-[1000px] items-center">
                <h1 className='text-blue-400 font-bold text-4xl my-8 mx-8 pl-[70px]'>
                    User Registration Page
                </h1>
                <form 
                onSubmit={handleSubmit}
                >
                    <div className="w-1/3 pl-20 py-2">
                            <button className='w-32 h-16 ml-10 rounded-full border-solid border-2 border-white text-blue-300 bg-white hover:bg-slate-100' onClick={googleRegister}>
                                <div className="inline-flex">
                                        <div>
                                            <svg className="w-4 h-4 mr-2 mt-[13px]" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                                <path fill="blue" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z">
                                                </path>
                                            </svg>
                                        </div>
                                        <span className='text-lg mt-2'>Sign Up</span>
                                </div>
                            </button>
                        </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Reg