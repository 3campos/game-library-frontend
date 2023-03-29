import React, { Component } from 'react'
// importing edit component here
import EditBtn from './EditBtn'
import BackBtn from './BackBtn'

class ShowContainerCustom extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let gameToEdit ={
                id: this.props.id,
                title: this.props.gameTitle,
                backgroundImage: this.props.gameImage,
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
            <div className='font-share-tech-mono bg-emerald-400 min-h-screen flex'>
                <div className='w-full max-w-[1000px] items-center'>
                    <h1 className='text-blue-800 text-5xl font-bold text-center'>{this.props.gameTitle}</h1>
                    <div className="flex justify-center">{<img className='h-[300px]' src = {this.props.gameImage} />}</div>
                    <div className="text-blue-800 text-2xl flex justify-center">Game Duration: {this.props.gameDuration} Hours</div>
                    <div className="text-blue-800 text-2xl flex justify-center"> Genre: {this.props.gameGenre}</div>
                        
                    <div className="text-blue-800 text-2xl flex justify-center"> Game Rating: {this.props.gameRating}/5
                    </div>
                    <div className="text-blue-800 text-2xl flex justify-center">Notes: {this.props.gameNotes}
                    </div>
                    <div>
                        <EditBtn id = {this.props.id}/>
                    </div>
                    <button className="flex justify-center w-1/5 rounded-full border-solid border-2 border-white text-blue-800 text-center text-2xl" onClick={()=>{
                        this.props.handleDeleteGame(this.props.id);
                        }}
                        >
                        <span>
                            Delete Game
                        </span>
                    </button>
                    <div><BackBtn/></div>
                </div>
            </div>
            </>
        )
    }
}

export default ShowContainerCustom