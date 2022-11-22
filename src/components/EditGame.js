import React, { Component } from 'react'
import BackBtn from './BackBtn'
import EditGameForm from './EditGameForm'

class EditGame extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return(
            <div>
                <BackBtn />
                <h1>Edit Game</h1>
                <EditGameForm
                    customGames={this.props.customGames}
                    handleEditGame={this.props.handleEditGame}
                    gameToEdit={this.props.gameToEdit}
                />
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