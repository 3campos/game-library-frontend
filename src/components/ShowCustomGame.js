import React, { Component } from 'react'
import ShowContainerCustom from './ShowContainerCustom'
// import BackBtn from './BackBtn';

class ShowCustomGame extends Component {
    constructor(props){
        super(props)
    }
    render(){
        const customGameId = window.location.search.slice(0);
        return(
        <div>
        {this.props.customGames.map((game, index) => {
                if(game._id === customGameId){
                    return(
                        <ShowContainerCustom
                        key={index}
                        id={this.props.id}
                        title={this.props.gameTitle}
                        img={this.props.gameImage}
                        gameDuration={this.props.gameDuration}
                        gameGenre={this.props.gameGenre}
                        gameRating={this.props.gameRating}
                        handleDeleteGame={this.props.handleDeleteGame}
                        gameToEdit={this.props.gameToEdit}
                        gameDescription={this.props.gameDescription}
                        passGameData={this.props.passGameData}
                        />
                    )
    }
})}
</div>
)}}

export default ShowCustomGame