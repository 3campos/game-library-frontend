import React, { Component } from 'react'
import BackBtn from './BackBtn'

let key = process.env.REACT_APP_API_KEY

class ShowContainerAPI extends Component {
    constructor(props){
        super(props);
        this.state = {
            specificBaseUrl: 'https://api.rawg.io/api/games/',
            keyParam: '?key=',
            specificKey: process.env.REACT_APP_API_KEY,
            specificSearchUrl: "",
        }
    }

    getApiGameSearchUrl = () => {
        this.setState({
            specificSearchUrl: this.state.specificBaseUrl + parseInt(window.location.search.slice(4)) + this.state.keyParam + this.state.specificKey
        }, () => (
          fetch(this.state.specificSearchUrl)
          .then(response => {return response.json() })
          .then(json => {
            const apiDescToAdd = json.description_raw
            // for(const desc in json) {
            //     apiDescToAdd.push(json[desc])
            // }
            this.setState({
              descs: apiDescToAdd
            })
          }
          ), (err) => console.log(err)
        ))
      }

      componentDidMount() {
        this.getApiGameSearchUrl();
      }

    render(){
        let genrePull =[]
        console.log(this.state.descs)
        return(
            <>
            <div className='font-share-tech-mono bg-emerald-400 min-h-screen flex justify-center'>
            <div className="w-full max-w-[1000px]">
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
            <div>
            <div className="text-blue-800 text-2xl flex justify-center">Description: {this.state.descs}</div>
            </div>
            <div className = "grid flex-col grid-cols-1 justify-items-center">
              <div><BackBtn/></div>
            </div>
            </div>
            </div>
            </>
        )
    }
}

export default ShowContainerAPI