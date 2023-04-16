import React, { Component, Link }from 'react'

export class LoginForm extends Component {
    constructor(props){
        super(props)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(currentId){
            console.log('Current Id obtained')
        } else {
            console.log('NO ID OBTAINED')
        }
    }

  render() {
    return (
    <Link to='/userlogin'>
        <div> {setCurrentId={setCurrentId}} </div>
        <div>Login Form</div>
        <div></div>
    </Link>
    )
  }
}

export default LoginForm