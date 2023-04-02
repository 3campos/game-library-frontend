import React, { Component } from 'react'
import ShowContainerAPI from './ShowContainerAPI'

let apiGameId = parseInt(window.location.search.slice(4));
class ShowAPIGame extends Component {
    constructor(props){
        super(props);
        }

    render(){
        apiGameId = parseInt(window.location.search.slice(4));
    
    return(
        <div className='font-share-tech-mono bg-emerald-400'>
        {this.props.apiGames?.map((game, index)=> {
            if(game.id === apiGameId){
                return(
                    <div className='font-share-tech-mono bg-emerald-400'>
                    <ShowContainerAPI
                    key={index}
                    id={apiGameId}
                    gameTitle={game.name}
                    gameImage={game.background_image}
                    gameDuration = {game.playtime}
                    gameGenre = {game.genres}
                    gameRating = {game.rating}
                    />
                    </div>
                    )
                }
            })
        }
        </div>
        )   
    } 
}

export default ShowAPIGame