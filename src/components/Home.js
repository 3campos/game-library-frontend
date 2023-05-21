import React, { Component } from "react";
import ApiGameTile from './ApiGameTile';
import CustomGameTile from './CustomGameTile'
// import DemoBtn from "./BypassLogin";
import '../index.css'

class Home extends Component {
    render() {
        console.log('home 9 googleid:', this.props.userGoogleId)
        return(
            <div className='font-share-tech-mono flex flex-col justify-start items-center bg-gray-600 w-full h-screen pt-3 pb-14'>
                <h2 className='text-cyan-400 font-bold text-2xl mb-3'>Popular Games</h2>
                    <div id="api-tile-container" className='grid w-full sm:w-3/5 sm:min-w-3/5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 h-[370px] grid-flow-row gap-4 bg-transparent overflow-scroll max-w-fit min-w-[370px] md:w-4/5'>
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
                    <h2 className='text-cyan-400 font-bold text-2xl my-3'>{this.props.userName}'s Games</h2>
                    <div id="custom-game-tile" className="grid w-full 
                    sm:w-3/5 sm:min-w-3/5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 h-[370px] grid-flow-row gap-4 bg-transparent overflow-scroll max-w-fit min-w-[370px] md:w-4/5">
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
                                    gameCreatorsGoogleId ={game.creatorsGoogleId}
                                    userGoogleId={this.props.userGoogleId}
                                    />
                                )
                            }
                            })}
                    </div> 
                    </> : 
                    <>
                    <h2 className='text-cyan-400 font-bold text-2xl my-3'>Demo Account's Games</h2>
                    <div id="custom-game-tile" className="grid w-full sm:w-3/5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 h-[370px] grid-flow-row gap-4 bg-transparent overflow-scroll max-w-fit lg:min-w-[767px] md:w-4/5">
                        {this.props.customGames?.map((game, index) =>  {
                            if(!game.creatorsGoogleId){
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
                                    gameCreatorsGoogleId ={game.creatorsGoogleId}
                                    userGoogleId={this.props.userGoogleId}
                                    />
                                )
                            }
                            })}
                    </div> 
                    <>
                    
                    <h2 className='text-cyan-400 font-bold text-2xl text-center mt-1'>App is in demo mode. Sign up/in is unnecessary. <p className="break-words text-xl">Desktop users can {`${`(step 1: sign up; step 2: sign in)`}`} with a Google account.
                    </p>
                    <p className="break-words text-xl italic underline">Mobile login coming soon!</p>    
                    </h2>
                    
                    </>
                    </>
                    }
                    
                    </>
            </div>
        )
    }
}

export default Home

