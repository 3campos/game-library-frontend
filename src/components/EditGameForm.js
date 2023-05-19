import React, { Component } from 'react'

class EditGameForm extends Component { 
    constructor(props){
        super(props)
        this.state = {
            title: this.props.gameToEdit.game,
            backgroundImage: this.props.gameToEdit.backgroundImage,
            playtime: this.props.gameToEdit.playtime,
            genre: this.props.gameToEdit.genre,
            rating: this.props.gameToEdit.rating,
            dbIdForGame: this.props.gameToEdit.uniqueDbId,
            creatorsGoogleId: this.props.gameToEdit.googleId
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
                backgroundImage: this.state.backgroundImage,
                playtime: this.state.playtime,
                genre: this.state.genre,
                rating: this.state.rating,
                notes: this.state.notes,
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
            <form onSubmit={this.handleEditGame} className="font-share-tech-mono flex flex-col w-4/5 p-4 max-w-[400px] bg-black rounded mx-8">
            <input
                id='title'
                type='text'
                defaultValue={this.props.gameToEdit.title}
                onChange={this.handleChange}
                placeholder='Game Name'
                className='border rounded p-1.5 my-1'
            >
            </input>
            <input
                id='backgroundImage'
                type='text'
                defaultValue={this.props.gameToEdit.backgroundImage}
                onChange={this.handleChange}
                placeholder='Image URL'
                className='border rounded p-1.5 my-1'
                >
            </input>
            <input
                id='playtime'
                type='text'
                defaultValue={this.props.gameToEdit.playtime}
                onChange={this.handleChange}
                placeholder='Game Duration (hours)'
                className='border rounded p-1.5 my-1'
                >
            </input>
            <input
                id='genre'
                type='text'
                defaultValue={this.props.gameToEdit.genre}
                onChange={this.handleChange}
                placeholder='Genre'
                className='border rounded p-1.5 my-1'
                >
            </input>
            <input
                id='rating'
                type='text'
                defaultValue={this.props.gameToEdit.rating}
                onChange={this.handleChange}
                placeholder='Rating (scale of 1-5)'
                className='border rounded p-1.5 my-1'
                >
            </input>
            <textarea
                id='notes'
                type='text'
                defaultValue={this.props.gameToEdit.notes}
                onChange={this.handleChange}
                placeholder='Game Progress'
                className='border rounded p-1.5 my-1 resize-y'
                >
            </textarea>
            <input
                type='submit'
                value='Update Game Details'
                className='border rounded p-1.5 my-1 text-white hover:bg-violet-900'
            />
            </form>
            </>
        )
    }
}

export default EditGameForm