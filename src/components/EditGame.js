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
                <div className='w-full max-w-[1000px] items-center'>
                <h1 className='text-blue-400 font-bold text-4xl my-8 mx-8 pl-28'>Edit Game</h1>
                <EditGameForm
                    customGames={this.props.customGames}
                    handleEditGame={this.props.handleEditGame}
                    gameToEdit={this.props.gameToEdit}
                />
                <div className='mt-.5 pt-2 pl-[175px] grid flex-row justify-items-start'>
                <BackBtn/>
                </div>
                </div>
            </div>
        )
    }
}

export default EditGame
