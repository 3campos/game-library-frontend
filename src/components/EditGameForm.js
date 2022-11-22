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
            window.location.href=`https://game-library-frontend.herokuapp.com/`;
        })
    }
}