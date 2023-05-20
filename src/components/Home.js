import React, { Component } from "react";
import ApiGameTile from './ApiGameTile';
import CustomGameTile from './CustomGameTile'
// import DemoBtn from "./BypassLogin";
import '../index.css'

class Home extends Component {
    render() {
        console.log('home 9 googleid:', this.props.userGoogleId)
        return(
            <div className='font-share-tech-mono flex flex-col justify-start items-center bg-gray-600 w-full h-screen pt-4 pb-4'>
                <h2 className='text-cyan-400 font-bold text-2xl my-4'>Popular Games</h2>
                    <div id="api-tile-container" className='grid w-full sm:w-3/5 sm:min-w-3/5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 h-[370px] grid-flow-row gap-4 bg-transparent overflow-scroll max-w-fit min-w-[370px]'>
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
                    <div id="custom-game-tile" className="grid w-full sm:w-3/5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 h-[370px] grid-flow-row gap-4 bg-transparent overflow-scroll max-w-fit min-w-[767px]">
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
                    <h2 className='text-cyan-400 font-bold text-2xl my-4'>Demo Account's Games</h2>
                    <div id="custom-game-tile" className="grid w-full sm:w-3/5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 h-[370px] grid-flow-row gap-4 bg-transparent overflow-scroll max-w-fit min-w-[767px]">
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
                    </>

                    // <>
                    //     <div className = "grid flex-col grid-cols-3 justify-items-end mt-2">
                    //         <div className='text-cyan-400 font-bold text-2xl my-4 text-center col-span-2'>
                    //             Click here to bypass login!
                    //         </div>
                    //         <div className='justify-self-start pl-2 flex shrink'>
                    //         <DemoBtn/>
                    //         </div>
                    //     </div>
                    //     <h2 className='text-cyan-400 font-bold text-2xl my-4 text-center'>Desktop Users Can Sign Up/In With A Google Account.
                    //         <p className="break-words"> 1. "Sign Up" To Register.
                    //         </p>
                    //         <p className="break-words"> 2. "Sign In" To Add Games!
                    //         </p>
                    //         <p className="break-words text-xl italic pt-2 underline">Mobile login coming soon!
                    //         </p>
                    //     </h2>
                    // </>
                    }
                    </>
            </div>
        )
    }
}

export default Home

