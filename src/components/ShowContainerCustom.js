import React, { Component } from 'react'
// importing edit component here
// import EditBtn from './EditBtn'

class ShowContainerCustom extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let gameToEdit ={
                id: this.props.id,
                title: this.props.gameTitle,
                img: this.props.gameImage,
                gameDuration: this.props.gameDuration,
                genre: this.props.gameGenre,
                rating: this.props.gameRating,
                rating: this.props.gameDescription,
            }
            this.props.passGameData(gameToEdit)
        }

    render() {
        return(
            <>
                <div>{this.props.gameTitle}</div>
                <div>{this.props.gameImage}</div>
                <div>{this.props.gameDuration}</div>
                <div>{this.props.gameGenre}</div>
                <div>{this.props.gameRating}</div>
                <div>{this.props.gameDescription}</div>
                <div><EditBtn id = {this.props.id}/></div>
            </>
        )
    }
}