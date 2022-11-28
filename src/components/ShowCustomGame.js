import React, { Component } from 'react'
import ShowContainerCustom from './ShowContainerCustom'
import BackBtn from './BackBtn';
import { Link } from 'react-router-dom'

let customGameId = window.location.search.slice(4);
class ShowCustomGame extends Component {
    constructor(props){
        super(props)
    }
    render(){
        customGameId = window.location.search.slice(4);
        // console.log(customGameId)
        return(
        <div className='font-share-tech-mono'>
        {this.props.customGames?.map((game, index) => {
                if(game._id == customGameId){
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
                            />
                            <BackBtn />
                        </div>
                    )
    }
})}
<div>
<Link to = {`/showcustom?id=${this.props.id}`}> View More
                    </Link>
</div>
</div>
)}}

export default ShowCustomGame