import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ApiGameTile extends Component {
    render() {
        return (
            <div className='flex flex-col relative'>
                <div id="tile" className={this.props.cssKeys > 3 ? "border-black border-2 rounded-md p-2 h-44 w-44 overflow-hidden transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" : "border-black border-2 rounded-md p-2 h-44 w-44 overflow-hidden transition ease-in-out delay-150 bg-blue-500 hover: translate-y-3 hover:scale-110 hover:bg-indigo-500 duration-300"}>
                    <div className='flex justify-around items-start w-full snap-center'>
                        <div className='flex flex-col w-full'>
                            <p className='truncate'>{this.props.gameTitle}</p>
                            <div>
                                <Link to = {`/showapi?id=${this.props.id}`}>{<img className="ml-1 mr-1 border-2 w-auto h-auto w-36 h-24" src = {this.props.gameImage} />}
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