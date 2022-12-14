import React, { Component } from "react";
import ApiGameTile from './ApiGameTile';
import CustomGameTile from './CustomGameTile'
import '../index.css'

class Home extends Component {
    
    render() {
        return(
            <div className='font-share-tech-mono flex flex-col justify-center items-center bg-gray-600 w-full h-screen pt-4 pb-4'>
                <h2 className='text-cyan-400 font-bold text-2xl my-4'>API Games</h2>
                    <div id="api-tile-container" className='grid w-full sm:w-3/5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 h-[370px] grid-flow-row gap-4 bg-transparent overflow-scroll max-w-fit'>
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
                                // gameDescription={desc.description}
                                />
                                
                            )
                        })}
                    </div>
                    <h2 className='text-cyan-400 font-bold text-2xl my-4'>Custom Games</h2>
                    <div id="custom-game-tile" className="grid w-full sm:w-3/5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 h-[370px] grid-flow-row gap-4 bg-transparent overflow-scroll max-w-fit">
                        {this.props.customGames?.map((game, index) => {
                            // cssKey=index
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
                                // handleClick={this.props.handleClick}
                                />
                            )
                            })}
                    </div>
            </div>
        )
    }
}

export default Home

