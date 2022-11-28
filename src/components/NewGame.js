import React, { Component } from 'react'
import BackBtn from './BackBtn'


class NewGame extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            backgroundImage: '',
            playtime: '',
            genre: '',
            rating: '',
            notes: '',
        }
    }

    //handleChange method
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    //handleSubmit method
    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`${process.env.REACT_APP_BACKEND_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                backgroundImage: this.state.backgroundImage,
                playtime: this.state.playtime,
                genre: this.state.genre,
                rating: this.state.rating,
                notes: this.state.notes,
            })
        })

        .then(res=>{
            if(res.ok){
                return res.json()
            }
            throw new Error (res)
        })

        .then(resJson => {
            this.setState({
                title: '',
                backgroundImage: '',
                playtime: '',
                genre: '',
                rating: '',
                notes: '',
            })
            window.location.href=`https://game-library-frontend.herokuapp.com/`
        })
        .catch(err => (console.log(err)))
    }

    render() {
        return(
            <div className='font-share-tech-mono'>
                <div>
                    <BackBtn/>
                    <h1>
                        Add Custom Game
                    </h1>
                    <form 
                        onSubmit={this.handleSubmit}
                    >
                    <input
                    id='title'
                    type='text'
                    value={this.state.title}
                    onChange={this.handleChange}
                    placeholder='Game Name'
                    >
                    </input>
                    <input
                    id='backgroundImage'
                    type='text'
                    value={this.state.backgroundImage}
                    onChange={this.handleChange}
                    placeholder='Image URL'
                    >
                    </input>
                    <input
                    id='playtime'
                    type='text'
                    value={this.state.playtime}
                    onChange={this.handleChange}
                    placeholder='Playing Time'
                    >
                    </input>
                    <input
                    id='genre'
                    type='text'
                    value={this.state.genre}
                    onChange={this.handleChange}
                    placeholder='Genre'
                    >
                    </input>
                    <input
                    id='rating'
                    type='text'
                    value={this.state.rating}
                    onChange={this.handleChange}
                    placeholder='Rating'
                    >
                    </input>
                    <input
                    id='notes'
                    type='text'
                    value={this.state.notes}
                    onChange={this.handleChange}
                    placeholder='Notes'
                    >
                    </input>
                    
                    <input
                    type='submit'
                    value='Add New Game'
                    />

                    </form>
                </div>
            </div>
        )
    }
}

export default NewGame