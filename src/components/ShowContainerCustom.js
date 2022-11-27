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
                background_image: this.props.gameImage,
                playtime: this.props.gameDuration,
                genre: this.props.gameGenre,
                rating: this.props.gameRating,
                notes: this.props.gameNotes,
            }
            this.props.passGameData(gameToEdit)
        }

    render() {
        return(
            <>
            <div>
                <h1>{this.props.gameTitle}</h1>
                <div>{<img src = {this.props.gameImage} />}</div>
                <div>{this.props.gameDuration}</div>
                <div>
                    <h2>Genre:</h2>
                </div>
                    <p>{this.props.gameGenre}</p>
                <div>
                    <h2>Game Rating:</h2>
                </div>
                <div>{this.props.gameRating}</div>
                <div>
                    <h2>Notes:</h2>
                    {/* <EditBtn id={this.props.id}/> */}
                </div>
                    <p>{this.props.gameNotes}</p>
                {/* <div>
                    <EditBtn id = {this.props.id}/>
                </div> */}
                <button onClick={()=>{
                    this.props.handleDeleteGame(this.props.id);
                    }}
                    >
                    <span>
                        delete
                    </span>
                </button>
            </div>
            </>
        )
    }
}

export default ShowContainerCustom