import React, { Component } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

export class Auth extends Component {
    constructor(props){
        super(props)
        this.state = {
            showPassword: "",
            isSignUp: false,
        }
    }

    handleChange = (e) => {
        e.preventDefault()
        // this.setState({
        //     [e.target.id]: e.target.value
        // })
    }


    switchMode = () => {
        if (this.state.isSignUp == false){
        this.setState(
            {isSignUp: true}
        )
    } 
    else {
        this.setState(
            {isSignUp: false}
        )
    }
    }

    googleSuccess = (res) => {
        console.log(res)
    };

    googleFailure = () => {
        console.log("Google Sign In was unsuccessful. Try Again Later.")
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

    return (
    // <Link to='/auth'>
    <div>
        <div className="font-share-tech-mono bg-gray-600 min-h-screen flex flex-col justify-start items-start box-border">
            <div className="w-full max-w-[1000px] items-center">
                <h1 className='text-blue-400 font-bold text-4xl my-8 mx-8 pl-[70px]'>
                    Auth Page
                </h1>
                {/* <img className="w-10 h-10 rounded-full" src="../src/avatar-sample.jpeg"/> */}
                <div className= 'pl-16 pr-40'>
                    {this.state.isSignUp ? <input
                    type='file'
                    name="file_upload"
                    onChange={this.handleChange}
                    // className= 'grid grid-cols-1 gap-3 justify-normal w-1/3'
                    className="border grid grid-cols-1 gap-3 justify-normal w-1/3 text-base"
                    >
                    </input> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-12 ml-24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>}
                </div>
                <div className="pl-36 py-2 text-2xl">
                    {this.state.isSignUp ? 'Sign Up' : 'Sign In'}
                </div>

                <form 
                onSubmit={this.handleSubmit}
                >
                    <div>
                        {
                        this.state.isSignUp && (
                            <div className="pl-16 pr-4 grid grid-cols-1 gap-3 justify-normal w-1/3 text-xl">
                                <input
                                name="firstName"
                                label="First Name"
                                placeholder="First Name"
                                handleChange={this.handleChange}
                                >
                                </input>
                                <input
                                name="lastName"
                                label="Last Name"
                                placeholder="Last Name"
                                handleChange={this.handleChange}
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

                        {this.state.isSignUp && <input name="confirmPassword" label="Repeat Password" placeholder="Confirm Password" handleChange={this.handleChange} type="password"></input>}

                        </div>
                        
                        <div className="pl-[135px] pt-4 pb-2">
                            <button
                            type='submit'
                            className='w-28 h-16 rounded-full border-solid border-2 border-white text-blue-300 text-center text-base hover:bg-violet-900'
                           >{this.state.isSignUp ? 'Sign Up' : 'Sign In'}</button>
                        </div>
                        <div className="w-1/3 pl-16 pr-4 py-2">
                        <GoogleOAuthProvider>
                        <GoogleLogin
                            clientId="233565457414-poin4grb183fi6chcq0lv5jcc4nel9qs.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                    <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                                        <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z">
                                        </path>
                                    </svg>
                                    Google Sign In
                                </button>
                            )}
                            onSuccess={this.googleSuccess}
                            onFailure={this.googleFailure}
                            cookiePolicy="single_host_origin"
                        />
                        </GoogleOAuthProvider>
                        </div>
                        <div className="grid grid-cols-1 pt-2 pl-12 justify-items-center w-1/3">
                        <button className="items-center w-48 h-16 rounded-md border-solid border-2 border-white text-blue-300 text-center text-base hover:bg-violet-900" onClick={this.switchMode}>
                            {this.state.isSignUp ? 'Already have an account? Sign in.' : "Don't have an account? Sign up."}
                        </button>
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