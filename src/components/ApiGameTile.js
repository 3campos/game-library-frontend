import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ApiGameTile extends Component {
    render() {
        return (
            <div className='flex flex-col relative'>
                <div id="tile" className={this.props.cssKeys % 2 == 0 ? "border-black border-2 rounded-md bg-emerald-400 p-2 h-44 w-44 overflow-hidden hover:animate-pulse" : "border-black border-2 rounded-md bg-teal-400 p-2 h-44 w-44 overflow-hidden hover:animate-pulse"}>
                    <div className='flex justify-around items-start w-full'>
                        <div className='flex flex-col w-full'>
                            <p className='truncate'>{this.props.gameTitle}</p>
                            <div>
                                <Link to = {`/showapi?id=${this.props.id}`}>{<img className="w-auto h-auto w-32 h-24" src = {this.props.gameImage} />}
                                </Link>
                            </div>
                            <p>Rating: {this.props.gameRating}/5</p>                          
                            {/* <p>{<img src = {this.props.gameImage} className='w-[44px] my-2 mr-2' />}</p> */}
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}


export default ApiGameTile