import React, { Component } from 'react'
import { Link, useHistory } from 'react-router-dom'

class EditGameForm extends Component { 
    constructor(props){
        super(props)
        this.state = {
            title: this.props.gameToEdit.game,
            img: this.props.gameToEdit.img,
            playDuration: this.props.gameToEdit.playDuration,
            genre: this.props.gameToEdit.genre,
            rating: this.props.gameToEdit.rating,
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleEditGame = (e) => {
        e.preventDefault()
        fetch(`${process.env.REACT_APP_BACKEND_URL}/${this.props.gameToEdit.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: this.state.title,
                img: this.state.img,
                playDuration: this.state.playDuration,
                genre: this.state.genre,
                rating: this.state.rating,
                description: this.state.description,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (res.ok) {
                return res.json()
            } throw new Error (res)
        })
        .then(resJson => {
            window.location.href=`https://game-library-frontend.herokuapp.com/showcustom?id=${this.props.gameToEdit.id}`;
        })
        .catch(err => (console.log(err)))
    }
    render(){
        return(
            <>
            <form onSubmit={this.handleEditGame}>
            <input
                id='title'
                type='text'
                defaultValue={this.props.gameToEdit.title}
                onChange={this.handleChange}
                placeholder='Game Name'
            >
            </input>
            <input
                id='img'
                type='text'
                defaultValue={this.props.gameToEdit.description}
                onChange={this.handleChange}
                placeholder='Image URL'
                >
            </input>
            <input
                id='playDuration'
                type='text'
                defaultValue={this.props.gameToEdit.playDuration}
                onChange={this.handleChange}
                placeholder='Game Name'
                >
            </input>
            <input
                id='genre'
                type='text'
                defaultValue={this.props.gameToEdit.genre}
                onChange={this.handleChange}
                placeholder='Genre'
                >
            </input>
            <input
                id='rating'
                type='text'
                defaultValue={this.props.gameToEdit.rating}
                onChange={this.handleChange}
                placeholder='Rating'
                >
            </input>
            <input
                id='description'
                type='text'
                value={this.props.gameToEdit.description}
                onChange={this.handleChange}
                placeholder='Description'
                >
            </input>
            <input
                type='submit'
                value='Update Game Details'
            />
            </form>
            </>
        )
    }
}

export default EditGameForm