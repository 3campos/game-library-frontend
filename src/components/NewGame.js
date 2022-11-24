import React, { Component } from 'react'
import BackBtn from './BackBtn'


class NewGame extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            img: '',
            playDuration: '',
            genre: '',
            rating: '',
            description: '',
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
                img: this.state.img,
                playDuration: this.state.playDuration,
                genre: this.state.genre,
                rating: this.state.rating,
                description: this.state.description,
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
                img: '',
                playDuration: '',
                genre: '',
                rating: '',
                description: '',
            })
            window.location.href=`https://game-library-frontend.herokuapp.com/`
        })
        .catch(err => (console.log(err)))
    }

    render() {
        return(
            <div>
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
                    id='img'
                    type='text'
                    value={this.state.img}
                    onChange={this.handleChange}
                    placeholder='Image URL'
                    >
                    </input>
                    <input
                    id='playDuration'
                    type='text'
                    value={this.state.playDuration}
                    onChange={this.handleChange}
                    placeholder='Game Name'
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
                    id='description'
                    type='text'
                    value={this.state.description}
                    onChange={this.handleChange}
                    placeholder='Description'
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