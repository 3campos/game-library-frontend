import React, { Component } from 'react'
import { Link } from "react-router-dom"
import BackBtn from './BackBtn'

class EditBtn extends Component {
    constructor(props){
        super(props)
    }

    render () {
        {console.log('L11: usergoogleid:', this.props.userGoogleId, 'creatorGoogleid:', this.props.creatorsGoogleId, "typeof googleid:", typeof this.props.userGoogleId)}
        return (
            <>
            {console.log('L14: usergoogleid:', this.props.userGoogleId, 'creatorGoogleid:', this.props.creatorsGoogleId, "typeof googleid:", typeof this.props.userGoogleId)}
            <>
            <Link to ={`/edit?id=${this.props.id}`}>
                <div className="flex justify-center w-28 h-16 rounded-full border-solid border-2 border-white text-blue-300 text-center text-2xl hover:bg-violet-900">
                    <p className='flex self-center'>Edit Game</p>
                </div>
            </Link>
            </>
            :
            <div className = "grid flex-col grid-cols-1 justify-items-center mt-2 pt-2">
                <div>
                    <BackBtn/>
                </div>
            </div>
            }
            </>
        )
    }
}

export default EditBtn