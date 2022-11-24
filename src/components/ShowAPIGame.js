import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import ShowContainerAPI from './ShowContainerAPI'

class ShowAPIGame extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const apiGameId = parseInt(window.location.search.slice(4));

    return(
        <div>
        {this.props.apiGames?.map((game, index)=> {
            if(game.id === apiGameId){
                return(
                    <ShowContainerAPI
                    key={index}
                    id={apiGameId}
                    gameTitle={game.name}
                    gameImage={game.background_image}
                    gameDuration = {game.playtime}
                    gameGenre = {game.genres}
                    gameRating = {game.rating}
                    gameDescription = {game.description}
                    />)
                }
            })
        }
        </div>
        )
    }
}

export default ShowAPIGame