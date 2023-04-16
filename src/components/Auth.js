import React, { Component, Link } from 'react'

export class Auth extends Component {
    constructor(props){
        super(props)
        this.state = {
            showPassword: "",
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     if(this.currentId){
    //         console.log('Current Id obtained')
    //     } else {
    //         console.log('NO ID OBTAINED')
    //     }
    // }

    handleSubmit = (e) => {
        e.preventDefault();
    }; 

    // handleChange = () => {

    // };


  render() {
    const isSignUp = true;
    return (
    // <Link to='/auth'>
    <div>
        {/* <div> {setCurrentId={setCurrentId}} </div> */}
        <div className="font-share-tech-mono bg-gray-600 min-h-screen flex flex-col justify-start items-start box-border">
            <div className="w-full max-w-[1000px] items-center">
                <h1 className='text-blue-400 font-bold text-4xl my-8 mx-8 pl-16'>
                    Auth Page
                </h1>
                {/* <img className="w-10 h-10 rounded-full" src="../src/avatar-sample.jpeg"/> */}
                <div className= 'pl-16 pr-40'>
                    {isSignUp ? <input
                    type='file'
                    name="file_upload"
                    onChange={this.handleChange}
                    // className= 'grid grid-cols-1 gap-3 justify-normal w-1/3'
                    className="border grid grid-cols-1 gap-3 justify-normal w-1/3 text-base"
                    >
                    </input> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-12">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>}
                </div>
                <div className="pl-36 py-2 text-2xl">
                    {isSignUp ? 'Sign Up' : 'Sign In'}
                </div>

                <form 
                onSubmit={this.handleSubmit}
                >
                    <div>
                        {
                        isSignUp && (
                            <div className="pl-16 pr-4 grid grid-cols-1 gap-3 justify-normal w-1/3 text-xl">
                                <input
                                name="firstName"
                                label="First Name"
                                placeholder="First Name"
                                // handleChange={handleChange}
                                >
                                </input>
                                <input
                                name="lastName"
                                label="Last Name"
                                placeholder="Last Name"
                                // handleChange={handleChange}
                                >
                                </input>
                            </div>
                        )}
                        <div className="pl-16 pr-4 pt-2 grid grid-cols-1 gap-3 justify-normal w-1/3 text-xl">
                        <input name="email" label="Email Address" placeholder="Email Address" 
                        // handleChange={handleChange} 
                        type="email"></input>
                        
                        <input name="password" label="Password" placeholder="Password"
                        // handleChange={handleChange} 
                        type="password"></input>
                        </div>
                        <div className="pl-36 pt-2">
                            <input
                            type='submit'
                            className='bg-black border rounded p-1.5 my-1 ml-2 text-white hover:bg-violet-900'
                            value={isSignUp ? 'Sign Up' : 'Sign In'}
                           />
                        </div>
                    </div>
                </form>
                
                {/* <form 
                    onSubmit={this.handleSubmit}
                    className="font-share-tech-mono flex flex-col w-4/5 p-4 max-w-[400px] bg-black rounded mx-8"
                >
                    <input
                    id='title'
                    type='text'
                    value={this.state.title}
                    onChange={this.handleChange}
                    placeholder='Game Name'
                    className='border rounded p-1.5 my-1'
                    >
                    </input>
                    <input
                    type='submit'
                    value='Add New Game'
                    className='bg-black border rounded p-1.5 my-1 text-white hover:bg-violet-900'
                    />
                </form> */}
            </div>
        </div>
    </div>
    // </Link>
    )
  }
}

export default Auth