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
            <div className="font-share-tech-mono bg-gray-600 min-h-screen flex flex-col justify-start items-start box-border">
                <div className="w-full max-w-[1000px] items-center">
                    <h1 className='text-blue-400 font-bold text-4xl my-8 mx-8 pl-12'>
                        Add Custom Game
                    </h1>
                    <form 
                        onSubmit={this.handleSubmit}
                        className="font-share-tech-mono flex flex-col w-4/5 p-4 max-w-[400px] bg-black rounded mx-8"
                    >
                    <input
                    id='title'
                    type='text'
                    value={this.state.title}
                    onChange={this.handleChange}
                    placeholder='Game Name'
                    className='border rounded p-1.5 my-1'
                    >
                    </input>
                    <input
                    id='backgroundImage'
                    type='text'
                    value={this.state.backgroundImage}
                    onChange={this.handleChange}
                    placeholder='Image URL'
                    className='border rounded p-1.5 my-1'
                    >
                    </input>
                    <input
                    id='playtime'
                    type='text'
                    value={this.state.playtime}
                    onChange={this.handleChange}
                    placeholder='Playing Time'
                    className='border rounded p-1.5 my-1'
                    >
                    </input>
                    <input
                    id='genre'
                    type='text'
                    value={this.state.genre}
                    onChange={this.handleChange}
                    placeholder='Genre'
                    className='border rounded p-1.5 my-1'
                    >
                    </input>
                    <input
                    id='rating'
                    type='text'
                    value={this.state.rating}
                    onChange={this.handleChange}
                    placeholder='Rating'
                    className='border rounded p-1.5 my-1'
                    >
                    </input>
                    <textarea
                    id='notes'
                    type='text'
                    value={this.state.notes}
                    onChange={this.handleChange}
                    placeholder='Game Progress'
                    className='border rounded p-1.5 my-1 resize-y'
                    >
                    </textarea>
                    
                    <input
                    type='submit'
                    value='Add New Game'
                    className='bg-black border rounded p-1.5 my-1 text-white hover:bg-violet-900'
                    />

                    </form>
                    <div className='mt-.5 pt-2 pl-[175px] grid flex-row justify-items-start'>
                    <BackBtn/>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewGame