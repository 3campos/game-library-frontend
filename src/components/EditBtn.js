import React, { Component } from 'react'
import { Link } from "react-router-dom"

class EditBtn extends Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <Link to ={`/edit?id=${this.props.id}`}>
                <div className="flex justify-center w-1/5 rounded-full border-solid border-2 border-white text-blue-800 text-center text-2xl">
                    <div>Edit Game</div>
                </div>
            </Link>
        )
    }
}

export default EditBtn