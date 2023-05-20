import React, { Component } from 'react'
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
                dbIdForGame: this.props.dbIdForGame,
                creatorsGoogleId: this.props.creatorsGoogleId
            }
            this.props.passGameData(gameToEdit)
        }

    render() {
        {console.log('SCC 26 userGoogleId:', this.props.userGoogleId, 'creatorsGoogleId:', this.props.gameCreatorsGoogleId)}
        return(
            <>
            <div className='font-share-tech-mono bg-gray-800 min-h-screen flex justify-center'>
                <div className='w-full max-w-[1000px]'>
                    <h1 className='text-blue-300 text-5xl font-bold text-center mt-2 mb-.5'>{this.props.gameTitle}</h1>
                    <div className="flex justify-center pt-1.5">{<img className='h-[300px]' src = {this.props.gameImage} />}</div>
                    <div className="text-blue-300 text-2xl flex justify-center">Game Duration: {this.props.gameDuration} Hours</div>
                    <div className="text-blue-300 text-2xl flex justify-center"> Genre: {this.props.gameGenre}</div>
                        
                    <div className="text-blue-300 text-2xl flex justify-center"> Game Rating: {this.props.gameRating}/5
                    </div>
                    <div className="text-blue-300 text-2xl flex justify-center h-[140px] pt-2 mb-1 overflow-y-scroll max-w-full resize-y">Game Progress: {this.props.gameNotes}
                    </div>
                        <>
                        {/* {this.props.userGoogleId == this.props.gameCreatorsGoogleId ? */}
                        {!this.props.gameCreatorsGoogleId ?
                            <>
                            <div className = "grid flex-col grid-cols-3 justify-items-center pb-1 pt-.5">
                                <div>
                                    <EditBtn id = {this.props.id}/>
                                </div>
                                <button className="flex justify-center w-28 h-16 rounded-full border-solid border-2 border-white text-blue-300 text-center text-2xl hover:bg-violet-900" onClick={()=>{
                                    this.props.handleDeleteGame(this.props.id);
                                    }}
                                    >
                                    <span>
                                        Delete Game
                                    </span>
                                </button>
                                <div><BackBtn/></div>
                            </div>
                            </>
                            :
                            <>
                            {
                                this.props.gameCreatorsGoogleId && this.props.userGoogleId == this.props.gameCreatorsGoogleId ?
                                <>
                                    <div className = "grid flex-col grid-cols-3 justify-items-center pb-1 pt-.5">
                                        <div>
                                            <EditBtn id = {this.props.id}/>
                                        </div>
                                        <button className="flex justify-center w-28 h-16 rounded-full border-solid border-2 border-white text-blue-300 text-center text-2xl hover:bg-violet-900" onClick={()=>{
                                            this.props.handleDeleteGame(this.props.id);
                                            }}
                                            >
                                            <span>
                                                Delete Game
                                            </span>
                                        </button>
                                        <div><BackBtn/></div>
                                    </div>   
                                </>
                                :
                                    <div className = "grid flex-col grid-cols-1 justify-items-center pb-1 pt-.5">
                                        <div><BackBtn/></div>
                                    </div>
                            }
                            </>
                                }
                        </>
                        
                    </div>
                </div>
            </>
        )
    }
}

export default ShowContainerCustom