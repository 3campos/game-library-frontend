import React, { Component } from 'react'
import BackBtn from './BackBtn'
import EditGameForm from './EditGameForm'

class EditGame extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return(
            <div className='font-share-tech-mono bg-emerald-400 min-h-screen flex flex-col justify-start items-start box-border'>
                <div className='w-full max-w-[1000px] items-center'>
                <h1 className='text-blue-800 font-bold text-4xl my-8 mx-8'>Edit Game</h1>
                <EditGameForm
                    customGames={this.props.customGames}
                    handleEditGame={this.props.handleEditGame}
                    gameToEdit={this.props.gameToEdit}
                />
                <BackBtn/>
                </div>
            </div>
        )
    }
}

export default EditGame

{/* <EditExerciseForm 
        customExercises={this.props.customExercises} 
        handleEditExercise={this.props.handleEditExercise} 
        exerciseToEdit={this.props.exerciseToEdit}
        categories={this.props.categories}/> */}