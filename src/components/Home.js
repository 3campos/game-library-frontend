import React, { Component } from "react";
import ApiGameTile from './ApiGameTile';
import CustomGameTile from './CustomGameTile'

class Home extends Component {
    render() {
        return(
            <>
            <h2>API Games</h2>
            <div>
                {this.props.apiGames.map((game, index) => {
                    return (
                        <ApiGameTile
                        key={index}
                        id={game.id}
                        gameTitle={game.title}
                        gameImage={game.img}
                        gameDuration = {game.playDuration}
                        gameGenre = {game.genre}
                        gameRating = {game.rating}
                        gameDescription={game.description}
                        />
                    )
                })}
            </div>
            <h2>Custom Games</h2>
            <div>
                {this.props.customGames.map((game, index) => {
                    return(
                        <CustomGameTile
                        key = {index}
                        id = {game._id}
                        gameTitle={game.title}
                        gameImage={game.img}
                        gameDuration = {game.playDuration}
                        gameGenre = {game.genre}
                        gameRating = {game.rating}
                        gameDescription={game.description}
                        passGameData={this.props.passGameData}
                        />
                    )
                    })}
            </div>
            </>
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