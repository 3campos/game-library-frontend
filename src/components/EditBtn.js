import React, { Component } from 'react'
import { Link } from "react-router-dom"

class EditBtn extends Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <Link to ={`/edit?id=${this.props.id}`}>
                <p>
                <div className="hover:animate-bounce font-share-tech-mono">
                    <div className="text-end text-cyan-400">Edit Game</div>
                </div>
                </p>
            </Link>
        )
    }
}

export default EditBtn