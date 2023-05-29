import React, { Component } from 'react'
import { Link } from "react-router-dom"
import BackBtn from './BackBtn'

class EditBtn extends Component {
    constructor(props){
        super(props)
    }

    render () {
        return(
            <Link to ={`/edit?id=${this.props.id}`}>
                <div className="flex justify-center w-28 h-16 sm: w-20 sm: text-lg rounded-full border-solid border-2 border-white text-blue-300 text-center text-2xl hover:bg-violet-900">
                    <p className='flex self-center'>Edit Game</p>
                </div>
            </Link>
        )
    }
}

export default EditBtn