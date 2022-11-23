import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import ShowContainerAPI from './ShowContainerAPI'

class ShowAPIGame extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const apiGameId=parseInt(window.location.search);

    return(
        <div>
        {this.props.apiGames.map((game, index)=> {
            if(game.id === apiGameId){
                return(
                    <ShowContainerAPI
                    key={index}
                    id={apiGameId}
                    gameTitle={game.title}
                    gameImage={game.img}
                    gameDuration = {game.playDuration}
                    gameGenre = {game.genre}
                    gameRating = {game.rating}
                    gameDescription = {game.description}
                    />)}
            })
        }
        </div>
        )
    }
}

export default ShowAPIGame