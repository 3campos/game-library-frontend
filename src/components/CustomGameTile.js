import React, { Component } from 'react'
import { Link } from "react-router-dom";

class CustomGameTile extends Component {
    render(){
        return(
        <div className='flex flex-col relative'>
            <div id="tile" className={this.props.cssKeys > 3 ? "border-black border-2 rounded-md bg-emerald-400 p-2 h-44 w-44 overflow-hidden transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" : "border-black border-2 rounded-md bg-teal-400 p-2 h-44 w-44 overflow-hidden transition ease-in-out delay-150 bg-blue-500 hover: translate-y-3 hover:scale-110 hover:bg-indigo-500 duration-300"}>
                <div className='flex justify-between items-start w-full snap-center'>
                    <div className='flex flex-col w-full'>
                        <p className='truncate'>{this.props.gameTitle}
                        </p>
                        <div>
                        <Link to={`/showcustom?id=${this.props.id}`}>
                            <div>{<img className ="ml-1 mr-1 border-2 w-auto w-36 h-auto h-24" src = {this.props.gameImage} />}</div>
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