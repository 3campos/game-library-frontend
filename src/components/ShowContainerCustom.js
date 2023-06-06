import React, { Component } from 'react'
import EditBtn from './EditBtn'
import BackBtn from './BackBtn'
import ShareGameBtn from './ShareGameBtn'

let customGameId = window.location.search.slice(4);
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
                creatorsGoogleId: this.props.creatorsGoogleId,
                // permittedUsers: [{permittedName: this.props.gamePermittedUsers}]
                permittedUsers: this.props.gamePermittedUsers
            }
            this.props.passGameData(gameToEdit)
        }

    render() {
        customGameId = window.location.search.slice(4);
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
                            <div className = "grid flex-col grid-cols-4 justify-items-center pb-1 pt-.5">
                                <div>
                                    <EditBtn id = {this.props.id}/>
                                </div>
                                <button className="flex justify-center w-28 h-16 rounded-full border-solid border-2 border-white text-blue-300 text-center text-2xl hover:bg-violet-900 sm: w-20 sm: text-lg sm: pt-1" onClick={()=>{
                                    this.props.handleDeleteGame(this.props.id);
                                    }}
                                    >
                                    <span>
                                        Delete Game
                                    </span>
                                </button>
                                {/* <button className="flex justify-center w-28 h-16 rounded-full border-solid border-2 border-white text-blue-300 text-center text-2xl hover:bg-violet-900" onClick={()=>{ */}
                                    {/* // this.props.handleDeleteGame(this.props.id);
                                    //create a function to map through all users
                                    //the function should also add a user to this game's object in a 'permitted users' field; the permitted user field should be an array, so that multiple users can be entered */}
                                <div>
                                    <ShareGameBtn      
                                    // gamePermittedUsers={this.props.gamePermittedUsers}
                                    gameToEdit={this.props.gameToEdit}
                                    passGameData={this.props.passGameData}
                                    dbIdForGame={this.props.uniqueDbId}
                                    userGoogleId={this.props.userGoogleId}
                                    databaseUsers={this.props.databaseUsers}
                                    userName = {this.props.userName}
                                    />
                                </div>
                                <div>
                                    <BackBtn/>
                                </div>
                            </div>
                            </>
                            :
                            <>
                            {
                                (this.props.gameCreatorsGoogleId.length>1) && (this.props.userGoogleId == this.props.gameCreatorsGoogleId) ?
                                <>
                                    <div className = "grid flex-col grid-cols-4 justify-items-center pb-1 pt-.5">
                                        <div>
                                            <EditBtn id = {this.props.id}/>
                                        </div>
                                        <button className="flex justify-center w-28 h-16 sm: w-20 sm: text-lg rounded-full border-solid border-2 border-white text-blue-300 text-center text-2xl hover:bg-violet-900 sm: pt-1" onClick={()=>{
                                            this.props.handleDeleteGame(this.props.id);
                                            }}
                                            >
                                            <span>
                                                Delete Game
                                            </span>
                                        </button>
                                        <div>
                                            <ShareGameBtn      
                                            // gamePermittedUsers={this.props.gamePermittedUsers}
                                            gameToEdit={this.props.gameToEdit}
                                            passGameData={this.props.passGameData}
                                            dbIdForGame={this.props.uniqueDbId}
                                            userGoogleId={this.props.userGoogleId}
                                            databaseUsers={this.props.databaseUsers}
                                            userName = {this.props.userName}
                                            />
                                        </div>
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