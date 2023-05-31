import React, { Component } from 'react'
import { Link } from "react-router-dom"

//to do next
//i need to push into permittedName the name of the person that's permitted to view: permittedUsers: [{permittedName: ""}]

let usersURL = "http://localhost:3003/users"

class ShareGameBtn extends Component {
    constructor(props){
        super(props);
        this.state = {
              clickState: true,
              // permittedUsers: this.props.gameToEdit.permittedUsers
          };
    }

      showUsersToShare = () => {
        {this.state.clickState ?
        this.setState({
            clickState: false
        }) 
        :
        this.setState({
            clickState: true
        }) 
        }
        console.log('line 27:', this.props)
        console.log('line 28:', this.props.gamePermittedUsers)
      }

      addUserToPermittedUsers = (e, data) => {
        // console.log(e.currentTarget.innerText)
        //gets user's name

        // const copyPermittedUsers = [...this.state.permittedUsers]
        const copyPermittedUsers = [...this.props.gameToEdit.permittedUsers]
        // console.log('37 copyPerUsers', copyPermittedUsers)

        copyPermittedUsers.push({permittedName: e.currentTarget.innerText})
        
        this.props.gameToEdit.permittedUsers = copyPermittedUsers

        // console.log('39, copyPerUsers push', copyPermittedUsers)
                        // this.setState({permittedUsers: copyPermittedUsers})
        // console.log('41, state perUsers', this.state.permittedUsers)
        // alert(`${e.currentTarget.innerText} is now following your game!`)

        // this.setState({permittedUsers: [this.state.permittedUsers.push({permittedName: e.currentTarget.innerText})]})
        // .then(() => {
          fetch(`${process.env.REACT_APP_BACKEND_URL}/${this.props.gameToEdit.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                // permittedUsers: this.state.permittedUsers
                permittedUsers: this.props.gameToEdit.permittedUsers
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // })
        // .then(alert('test'))
        .then(res => {
            if (res.ok) {
                return res.json()
            } throw new Error (res)
        })
        // .then(resJson => {
        //     window.location.href=`https://game-library-frontend.herokuapp.com/showcustom?id=${this.props.gameToEdit.id}`;
        // })
        .catch(err => (console.log(err)))

        //does not change the data in mongoDB, but note that this function does push the name successfully per line 37 console.log
        // console.log('line 63, post-push-&-setState:', this.state.permittedUsers)
        .then(window.alert(`${e.currentTarget.innerText} is now following this game!`))
        .then(
          this.forceUpdate()
        )
        console.log('line 71, post-push:', this.props.gameToEdit.permittedUsers)
      }

      // shareAlert = (e) => {
      //   window.alert(`${e.currentTarget.innerText} is now following this game!`)
      // }
      // setPermittedUsersState = () => {
      //   this.setState({
      //     permittedUsers: this.props.gameToEdit.permittedUsers
      //   })
      // }

      // componentDidMount() {
      //   this.setPermittedUsersState();
      // }

    render () {
      // {console.log('82 state:', this.state.permittedUsers, 'props gametoedit', this.props.gameToEdit.permittedUsers)}
      {console.log('82 props', this.props.gameToEdit.permittedUsers)}
        return(
            <div className="flex justify-center w-36 h-16">
            <>
            {this.state.clickState == false ? 
            <div className='absolute flex flex-col gap-1.5 w-40 h-20 overflow-y-scroll items-center rounded-lg border-solid border-2 border-white py-2 animate-slide-in -mt-20'>
              {/* {console.log('line 81:', this.props)}
              {console.log('line 82:', this.props.databaseUsers)} */}
            <button type="button" className="sticky -left-1 -top-2 bg-white rounded-md p-1 inline-flex self-start justify-center text-black hover:text-violet-900 hover:bg-gray-100 focus:ring-2 focus:ring-inset focus:ring-violet-900 -mt-2 -mb-5 -ml-.5" onClick={this.showUsersToShare}>
              <svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
                
                {this.props.databaseUsers?.map((user, index) =>  {
                return(
                  <>
                  {this.props.gameToEdit.permittedUsers.some(e => e.permittedName == user.username) ? 
                      null
                    : 
                    <button key = {index} className='flex justify-center items-center w-[108px] h-8 ml-3 rounded-md border-solid border-y-2 border-x border-white text-blue-300 text-center text-sm hover:bg-violet-900 content-between' onClick={this.addUserToPermittedUsers}>
                    {/* {this.props.gameToEdit.permittedUsers.some(e => e.permittedName == user.username) ? 
                      <div className='pointer-events-none'>{user.username} {`${`(Already Shared!)`}`} </div> : <div>{user.username}</div> } */}
                      <p className='truncate'><div className={user.username.length>4?'hover:-translate-x-1/2 duration-[3000ms] delay-150':`truncate`}>{user.username}</div>
                      </p>
                    </button>
                    }
                  </>
                )
                })}

            </div> :
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
            null
            }
            </>
            <button className='flex absolute justify-center items-center w-28 sm: w-20 sm: text-lg h-16 rounded-full border-solid border-2 border-white text-blue-300 text-center text-2xl hover:bg-violet-900' onClick={this.showUsersToShare}>
                    <div className='flex flex-row-2 justify-center items-center'> 
                        <p>Share Game</p>
                    </div>
            </button>
            </div>
        )
    }
}

export default ShareGameBtn