import React, { Component } from "react";
import ApiGameTile from './ApiGameTile';
import CustomGameTile from './CustomGameTile'
import '../index.css'

class Home extends Component {

    componentDidMount = () => {
        this.props.getUserData
    }

    render() {
        console.log('uniqueDbId:', this.props.uniqueDbId, 'currentid:', this.props.currentId)
        
        return(
            <>
            <div className='font-share-tech-mono flex flex-col justify-start items-center bg-gray-600 w-full h-screen pt-4 pb-4'>
                <h2 className='text-cyan-400 font-bold text-2xl my-4'>Popular Games</h2>
                    <div id="api-tile-container" className='grid w-full sm:w-3/5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 h-[370px] grid-flow-row gap-4 bg-transparent overflow-y-scroll max-w-fit min-w-[825px]'>
                        {this.props.apiGames?.map((game, index) => {
                            return (
                                <ApiGameTile
                                cssKeys={index}
                                key={index}
                                id={game.id}
                                gameTitle={game.name}
                                gameImage={game.background_image}
                                gameDuration = {game.playtime}
                                gameGenre = {game.genres}
                                gameRating = {game.rating}
                                gameNotes={game.notes}
                                gameDescription={this.props.apiDesc}
                                />
                                
                            )
                        })}
                    </div>
                    <>
                    {this.props.uniqueDbId ?
                    <>
                    <h2 className='text-cyan-400 font-bold text-2xl my-4'>{this.props.userName}'s Games</h2>
                    <div id="custom-game-tile" className="grid w-full sm:w-3/5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 h-[370px] grid-flow-row gap-4 bg-transparent overflow-y-scroll max-w-fit min-w-[825px]">
                        {this.props.customGames?.map((game, index) =>  {
                            if(this.props.uniqueDbId == game.dbIdForGame){
                                return(
                                    <CustomGameTile
                                    cssKeys={index}
                                    key = {index}
                                    id = {game._id}
                                    gameTitle={game.title}
                                    gameImage={game.backgroundImage}
                                    gameGenre = {game.genre}
                                    gameDuration = {game.playtime}
                                    gameRating = {game.rating}
                                    gameNotes={game.notes}
                                    passGameData={this.props.passGameData}
                                    dbIdForGame={this.props.uniqueDbId}
                                    />
                                )
                            }
                            })}
                    </div> 
                    </> : 
                    <>
                        <h2 className='text-cyan-400 font-bold text-2xl my-4 text-center'>Sign In Using Your Google Account <p className="break-words">To Add A Customizable Library!</p></h2>
                        <div className='inline-flex'>
                        <button className="inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-2 mt-3 text-cyan-400" onClick={this.props.getUserData()}>
                            test button 1
                        </button>
                        <button className="inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-2 mt-3 text-cyan-400" onClick={this.props.getUserData}>
                            test button 2
                        </button>
                        </div>
                    </>
                    }
                    </>
            </div>
            </>
        )
    }
}

export default Home

