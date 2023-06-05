import React, { Component } from "react";
import ApiGameTile from './ApiGameTile';
import CustomGameTile from './CustomGameTile'
import '../index.css'

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            toggleSharedLibrary: true
        }
    }

    showSharedGames = () => {
        if(this.state.toggleSharedLibrary == true){
                this.setState({
                    toggleSharedLibrary: false
                } 
                )   
            }
                return this.state.toggleSharedLibrary
            }

    showUserGames = () => {
        if(this.state.toggleSharedLibrary == false){
            this.setState({
                toggleSharedLibrary: true
            })
        }
            return this.state.toggleSharedLibrary
            // console.log(this.state.toggleSharedLibrary)
    }

    render() {
        console.log('37:', this.state.toggleSharedLibrary)
        return(
            <div className='font-share-tech-mono flex flex-col justify-start items-center bg-gray-600 w-full h-screen pt-3 pb-14'>
                <div className='flex w-fit flex-rows justify-center min-w-[370px] gap-4 pl-6'>
                    <h2 className='text-cyan-400 font-bold text-2xl mb-3'>Popular Games</h2>
                </div>
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
                        <>
                            {this.state.toggleSharedLibrary ?
                                <h2 className='text-cyan-400 font-bold text-2xl my-3'>{this.props.userName}'s Games</h2>
                                :
                                <h2 className='text-cyan-400 font-bold text-2xl my-3'>Friends' Games</h2>
                            }
                        </>
                    <div id="custom-game-tile" className="grid w-full 
                    sm:w-3/5 sm:min-w-3/5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 h-[370px] grid-flow-row gap-4 bg-transparent overflow-scroll max-w-fit min-w-[370px] md:w-4/5">
                        <div>
                            <div class="inline-flex mt-2">
                                <button class="bg-[#1f1f1f] hover:bg-gray-400 text-cyan-400 py-2 px-2 rounded-l text-sm border-solid border-2 border-white h-10" onClick={this.showSharedGames}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </button>
                                <button class="bg-[#1f1f1f] hover:bg-gray-400 text-cyan-400 py-2 px-2 rounded-r text-sm border-solid border-2 border-white h-10"
                                onClick={this.showUserGames}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            {this.state.toggleSharedLibrary ? 
                                <>
                                {/* //this map method shows the user's own games */}
                                <div id="custom-game-tile" className="grid w-full sm:w-3/5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 h-[370px] grid-flow-row gap-4 bg-transparent overflow-scroll max-w-fit lg:min-w-[767px] md:w-4/5">
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
                                            // gamePermittedUsers={game.permittedUsers?.map((user, index) => {
                                            //         return(
                                            //             <>
                                            //             key={index}
                                            //             permittedUser={user.permittedName}
                                            //             </>
                                            //         )
                                            //     })
                                            // }
                                            gamePermittedUsers={game.permittedUsers}
                                            passGameData={this.props.passGameData}
                                            dbIdForGame={this.props.uniqueDbId}
                                            gameCreatorsGoogleId ={game.creatorsGoogleId}
                                            userGoogleId={this.props.userGoogleId}
                                            userName={this.props.userName}
                                            />
                                        )
                                    }
                                })}
                                </div>
                                </>
                            :
                            //this map method shows games that are shared with this user by others
                                <>
                                <div id="custom-game-tile" className="grid w-full sm:w-3/5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 h-[370px] grid-flow-row gap-4 bg-transparent overflow-scroll max-w-fit lg:min-w-[767px] md:w-4/5">
                                {this.props.customGames?.map((game, index) =>  {
                                    // finish conditional statement
                                    if(this.props.uniqueDbId != game.dbIdForGame && game.permittedUsers.some(e => e.permittedName == this.props.userName)){
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
                                            gamePermittedUsers={game.permittedUsers}
                                            userName={this.props.userName}
                                            databaseUsers={this.props.databaseUsers}
                                            />
                                        )
                                    }
                                })}
                                </div>
                                </>
                            }
                        </div>
                    </div> 
                    </> 
                    : 
                    //Demo Account's Games
                    <>
                        <div className='flex w-fit flex-rows justify-center min-w-[370px] gap-4 pl-6'>
                                <h2 className='text-cyan-400 font-bold text-2xl my-3'>Demo Account's Games</h2>
                        </div>
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
                                        gamePermittedUsers={game.permittedUsers}
                                        userName={this.props.userName}
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

