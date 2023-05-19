import React, { Component } from 'react'
import ShowContainerCustom from './ShowContainerCustom'

let customGameId = window.location.search.slice(4);
class ShowCustomGame extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        {console.log('SCG 11 userGoogleId:', this.props.userGoogleId, 'creatorsGoogleId:', this.props.creatorsGoogleId)}
        customGameId = window.location.search.slice(4);
        return(
        <div className='font-share-tech-mono'>
        {this.props.customGames?.map((game, index) => {
                if(game._id == customGameId) {
                    return(
                        <div>
                            <ShowContainerCustom
                            key={index}
                            id={customGameId}
                            gameTitle={game.title}
                            gameImage={game.backgroundImage}
                            gameGenre={game.genre}
                            gameDuration={game.playtime}
                            gameRating={game.rating}
                            gameNotes={game.notes}
                            handleDeleteGame={this.props.handleDeleteGame}
                            gameToEdit={this.props.gameToEdit}
                            passGameData={this.props.passGameData}
                            dbIdForGame={this.props.uniqueDbId}
                            creatorsGoogleId ={this.props.creatorsGoogleId}
                            userGoogleId={this.props.userGoogleId}
                            />
                        </div>
                    )
    }
})}
</div>
)}}

export default ShowCustomGame