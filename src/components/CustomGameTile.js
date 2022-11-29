import React, { Component } from 'react'
import { Link } from "react-router-dom";

class CustomGameTile extends Component {
    render(){
        return(
        <div className='flex flex-col relative'>
            <div id="tile" className={this.props.cssKeys % 2 == 0 ? "border-black border-2 rounded-md bg-emerald-400 p-2 h-44 w-44 overflow-hidden hover:animate-pulse" : "border-black border-2 rounded-md bg-teal-400 p-2 h-44 w-44 overflow-hidden hover:animate-pulse"}>
                <div className='flex justify-between items-start w-full'>
                    <div className='flex flex-col w-full'>
                        <p className='truncate'>{this.props.gameTitle}
                        </p>
                        <div className="h-3/4 w-3/4">
                        <Link to={`/showcustom?id=${this.props.id}`}>
                            <div>{<img src = {this.props.gameImage} />}</div>
                        </Link></div>
                        <p className='flex flex-row'>Rating: {this.props.gameRating}/5
                        </p>
                    </div>
                </div>
            </div>
        </div>
        )
    } 
}

export default CustomGameTile