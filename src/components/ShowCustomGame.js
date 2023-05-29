import React, { Component } from 'react'
import ShowContainerCustom from './ShowContainerCustom'

let customGameId = window.location.search.slice(4);
class ShowCustomGame extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
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
                            gamePermittedUsers={game.permittedUsers}
                            handleDeleteGame={this.props.handleDeleteGame}
                            gameToEdit={this.props.gameToEdit}
                            passGameData={this.props.passGameData}
                            dbIdForGame={this.props.uniqueDbId}
                            gameCreatorsGoogleId ={game.creatorsGoogleId}
                            userGoogleId={this.props.userGoogleId}
                            databaseUsers={this.props.databaseUsers}
                            />
                        </div>
                    )
    }
})}
</div>
)}}

export default ShowCustomGame