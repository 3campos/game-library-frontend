import React, { Component } from 'react'
import BackBtn from './BackBtn'

let apiGameIdSlice=parseInt(window.location.search.slice(4))

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
      return(
          <>
          <div className='font-share-tech-mono bg-gray-800 min-h-screen flex justify-center mt-.5 pt-1.5 mb-.5'>
          <div className="w-full max-w-[1000px]">
          <h1 className='text-blue-300 text-5xl font-bold text-center pb-1'>{this.props.gameTitle}</h1>
          <div className="flex justify-center">{<img className='h-[300px]' src = {this.props.gameImage} />}</div>
          <div className="text-blue-300 text-2xl flex justify-center">Game Duration: {this.props.gameDuration} hours</div>
          <div className="text-blue-300 text-2xl flex justify-center">Genres: 
              {this.props.gameGenre.forEach(genre => {
                  genrePull.push(' ' + genre.name)
              })
              }
              {genrePull = genrePull.toString()}
          </div>
          <div className="text-blue-300 text-2xl flex justify-center">Rating: {this.props.gameRating}/5</div>
          <div>
          <div className="text-blue-300 text-2xl h-[280px] pt-2 text-left flex justify-center overflow-y-scroll max-w-full">Description: {this.state.descs}</div>
          </div>
          <div className = "grid flex-col grid-cols-1 justify-items-center mt-2 pt-2">
            <div><BackBtn/></div>
          </div>
          </div>
          </div>
          </>
      )
  }
}

export default ShowContainerAPI