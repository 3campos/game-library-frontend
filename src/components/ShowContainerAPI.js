import { toBeInTheDOM } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react'
import BackBtn from './BackBtn'

let key = process.env.REACT_APP_API_KEY

class ShowContainerAPI extends Component {
    constructor(props){
        super(props);
    }

    render(){
        let genrePull =[]

        return(
            <div className='font-share-tech-mono bg-emerald-400 min-h-screen flex'>
            <div className="w-full max-w-[1000px] items-center">
            <h1 className='text-blue-800 text-5xl font-bold text-center'>{this.props.gameTitle}</h1>
            <div className="flex justify-center">{<img className='h-[300px]' src = {this.props.gameImage} />}</div>
            <div className="text-blue-800 text-2xl flex justify-center">Game Duration: {this.props.gameDuration} hours</div>
            <div className="text-blue-800 text-2xl flex justify-center">Genres: 
                {this.props.gameGenre.forEach(genre => {
                    genrePull.push(' ' + genre.name)
                })
                }
                {genrePull = genrePull.toString()}
            </div>
            <div className="text-blue-800 text-2xl flex justify-center">Rating: {this.props.gameRating}/5</div>
            <div ><BackBtn/></div>
            </div>
            </div>
        )
    }
}

export default ShowContainerAPI