import React, { Component } from 'react'
import { Link } from "react-router-dom";

class CustomGameTile extends Component {
    render(){
        return(
        <div className='flex flex-col relative'>
            <div id="tile" className="border-black border-2 rounded-md p-2 h-44 w-44 overflow-hidden transition ease-in-out delay-150 bg-blue-500 hover: translate-y-2 hover:scale-110 hover:bg-indigo-500 duration-300">
                <div className='flex justify-around items-start w-full snap-center'>
                    <div className='flex flex-col w-full'>
                        <p className='truncate'><div className={this.props.gameTitle.length>18?'hover:-translate-x-full duration-[3000ms] delay-150':`truncate`}>{this.props.gameTitle}</div>
                        </p>
                        <div>
                        <Link to={`/showcustom?id=${this.props.id}`}>
                            <div>{<img className ="ml-1 mr-1 border-2 w-auto w-36 h-auto h-24" src = {this.props.gameImage} />}</div>
                        </Link></div>
                        <div className='flex flex-row'>
                        <>
                            {this.props.databaseUsers?.map((user, index) =>  {
                            return(
                                <>
                                { 
                            ((this.props.gameCreatorsGoogleId != this.props.userGoogleId) && (user.googleId == this.props.gameCreatorsGoogleId))
                            ? 
                            <div>
                                {user.username}'s Game
                            </div>
                            : 
                            <p className='flex flex-row'>Rating: {this.props.gameRating}/5
                            </p>
                            }
                            </>
                            )
                            })}
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    } 
}

export default CustomGameTile