import React, { Component } from 'react'
import { Link } from "react-router-dom";

class CustomGameTile extends Component {
    render(){
        return(
        <div className='flex flex-col relative'>
            <div id="tile" className="border-black border-2 rounded-md bg-white p-2 h-44 w-44 overflow-hidden">
                <div className='flex justify-between items-start w-full'>
                    <div className='flex flex-col w-full'>
                        <p>{this.props.gameTitle}</p>
                        <p>{this.props.genre}</p>
                        <div>{<img src = {this.props.gameImage} />}</div>
                        <p>Rating: {this.props.gameRating}/5</p>
                    </div>
                </div>
                <p>{this.props.description}</p>
                <Link to={`/showcustom?id=${this.props.id}`}>
                    <p>
                        View More
                    </p>
                </Link>
            </div>
        </div>
        )
    }
}

export default CustomGameTile