import React, { Component } from 'react'

class ShowContainerAPI extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
            <div>{this.props.gameTitle}</div>
            <div>{this.props.gameImage}</div>
            <div>{this.props.gameDuration}</div>
            <div>{this.props.gameGenre}</div>
            <div>{this.props.gameRating}</div>
            <div>{this.props.gameDescription}</div>
            </>
        )
    }
}

export default ShowContainerAPI