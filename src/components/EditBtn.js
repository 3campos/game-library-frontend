import React, { Component } from 'react'
import { Link } from "react-router-dom"

class EditBtn extends Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <Link to ={`/edit?id=${this.props.id}`}>
                <div className="flex justify-center w-2/5 h-20 rounded-full border-solid border-2 border-white text-blue-800 text-center text-2xl">
                    <p className='flex self-center'>Edit Game</p>
                </div>
            </Link>
        )
    }
}

export default EditBtn