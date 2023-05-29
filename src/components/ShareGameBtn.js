import React, { Component } from 'react'
import { Link } from "react-router-dom"

//to do next
//i need to push into permittedName the name of the person that's permitted to view: permittedUsers: [{permittedName: ""}]

let usersURL = "http://localhost:3003/users"

class ShareGameBtn extends Component {
    constructor(props){
        super(props);
        this.state = {
        //     databaseUsersToShare: [{
        //         googleId: "",
        //         username: ""
        //       }],
              clickState: true,
          };
    }

      showUsersToShare = () => {
        // {this.state.clickState ? this.state.clickState = false : this.state.clickState = true}
        // console.log(this.state.clickState)
        {this.state.clickState ?
        this.setState({
            clickState: false
        }) 
        :
        this.setState({
            clickState: true
        }) 
        }
      }

      addUserToPermittedUsers = (e, data) => {
        console.log(e.currentTarget.innerText)
        //gets user's name
      }

      // componentDidMount() {
      //   this.getAllUsers();
      // }

    render () {
        return(
            <div className="flex justify-center w-36 h-16">
                {/* <div className="flex justify-center w-28 h-16 rounded-full border-solid border-2 border-white text-blue-300 text-center text-2xl hover:bg-violet-900">
                    <p className='flex self-center'>Edit Game</p> */}
            <>
            {this.state.clickState == false ? 
            <div className='absolute flex flex-col gap-1.5 w-40 h-20 overflow-y-scroll items-center rounded-lg border-solid border-2 border-white py-2 animate-slide-in -mt-20'>
            <button type="button" className="sticky -left-1 -top-2 bg-white rounded-md p-1 inline-flex self-start justify-center text-black hover:text-violet-900 hover:bg-gray-100 focus:ring-2 focus:ring-inset focus:ring-violet-900 -mt-2 -mb-5" onClick={this.showUsersToShare}>
              <svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
                {this.props.databaseUsers?.map((user, index) =>  {
                return(
                <button key = {index} className='flex justify-center items-center w-28 h-16 rounded-md border-solid border-2 border-white text-blue-300 text-center text-sm hover:bg-violet-900 content-between' onClick ={this.addUserToPermittedUsers}>
                    <div>{user.username}</div>
                  </button>
                )
                })}
            </div> :
            // <div className='flex flex-col gap-1.5 w-40 h-20 overflow-y-scroll items-center pl-1 ml-[5px] rounded-lg border-solid border-2 border-white py-2 invisible'></div>
            null
            }
             {this.state.clickState == true ? 
             <div className='absolute flex flex-col gap-1.5 w-36 h-20 overflow-y-scroll items-center rounded-lg border-solid border-2 border-white py-2 transition opacity-0 -mt-20'>
                {this.props.databaseUsers?.map((user, index) =>  {
                return(
                <button key = {index} className='flex justify-center items-center w-28 h-16 rounded-md border-solid border-2 border-white text-blue-300 text-center text-sm hover:bg-violet-900 content-evenly'>
                    {user.username}
                    </button>
                )
                })}
            </div> :
            // <div className='flex flex-col gap-1.5 w-40 h-20 overflow-y-scroll items-center pl-1 ml-[5px] rounded-lg border-solid border-2 border-white py-2 invisible'></div>
            null
            }
            </>
            <button className='flex absolute justify-center items-center w-28 h-16 rounded-full border-solid border-2 border-white text-blue-300 text-center text-2xl hover:bg-violet-900' onClick={this.showUsersToShare}>
                    <div className='flex flex-col justify-center items-center'> 
                        <p className='pr-1'>Share</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-7" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>
                    </div>
            </button>
            </div>
        )
    }
}

export default ShareGameBtn