import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ApiGameTile extends Component {
    render() {
        return (
            <div className='flex flex-col relative'>
                <div id="tile" className="border-black border-2 rounded-md bg-white p-2 h-44 w-44 overflow-hidden">
                    <div className='flex justify-between items-start w-full'>
                        <div className='flex flex-col w-full'>
                            <p>{this.props.gameTitle}</p>
                            <div>{<img src = {this.props.gameImage} />}</div>
                            <p>{this.props.genre}</p>
                            <p>Rating: {this.props.gameRating}/5</p>                            
                            {/* <p>{<img src = {this.props.gameImage} className='w-[44px] my-2 mr-2' />}</p> */}
                        </div>
                    </div>
                    <Link to = {`/showapi?id=${this.props.id}`}> View More
                    </Link>
                </div>
            </div>
        )
    }
}


export default ApiGameTile