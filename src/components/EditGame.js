import React, { Component } from 'react'
import BackBtn from './BackBtn'
import EditGameForm from './EditGameForm'

class EditGame extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return(
            <div className='font-share-tech-mono bg-gray-600 min-h-screen flex flex-col justify-start items-start box-border'>
                <div className='w-full flex flex-col justify-start items-center'>
                <h1 className='text-blue-400 font-bold text-4xl my-8 mx-8 sm: flex flex-col justify-start items-center'>Edit Game</h1>
                <div className="w-full max-w-[1000px] flex flex-col justify-start items-center">
                    <EditGameForm
                        customGames={this.props.customGames}
                        handleEditGame={this.props.handleEditGame}
                        gameToEdit={this.props.gameToEdit}
                    />
                </div>
                <div className='mt-.5 pt-2 grid flex flex-col justify-center'>
                <BackBtn/>
                </div>
                </div>
            </div>
        )
    }
}

export default EditGame
