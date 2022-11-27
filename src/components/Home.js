import React, { Component } from "react";
import ApiGameTile from './ApiGameTile';
import CustomGameTile from './CustomGameTile'
import '../index.css'

class Home extends Component {
    render() {
        return(
            <div className='flex flex-col justify-center items-center bg-[#353535] w-full h-screen pt-4 pb-4'>
            <h2 className='text-[#ffd056] font-bold text-2xl my-4'>API Games</h2>
            <div id="api-tile-container" className='grid w-full sm:w-3/5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 h-[370px] grid-flow-row gap-4 bg-transparent overflow-scroll max-w-fit'>
                {this.props.apiGames?.map((game, index) => {
                    return (
                        
                            <ApiGameTile
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
            <h2 className='text-[#ffd056] font-bold text-2xl my-4'>Custom Games</h2>
            <div id="custom-exercise-tile" className="grid w-full sm:w-3/5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 h-[370px] grid-flow-row gap-4 bg-transparent overflow-scroll max-w-fit">
                {this.props.customGames?.map((game, index) => {
                    return(
                        <CustomGameTile
                        key = {index}
                        id = {game._id}
                        gameTitle={game.title}
                        gameImage={game.background_image}
                        gameGenre = {game.genre}
                        gameDuration = {game.playtime}
                        gameRating = {game.rating}
                        gameNotes={game.notes}
                        passGameData={this.props.passGameData}
                        />
                    )
                    })}
            </div>
            </div>
        )
    }
}

export default Home

// function Home(){
//     return<>
//     <h1 className="text-3xl text-fuchsia-600 font-bold underline italic">
//     <span className="text-3xl text-emerald-300 not-italic"> Hi </span> West <span className="text-3xl text-emerald-300 not-italic"> World! </span>
//     </h1>
//     {console.log(process.env.REACT_APP_BACKEND_URL)}
//     </>
// }