import React, { Component } from 'react'
// import { Link } from "react-router-dom";
import ShowContainerAPI from './ShowContainerAPI'
import BackBtn from './BackBtn';

let apiGameId = parseInt(window.location.search.slice(4));
class ShowAPIGame extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //       baseUrl: 'https://api.rawg.io/api/games?key=',
        //       key: process.env.REACT_APP_API_KEY,
        //       searchUrl: "",
        //     //for editing games, initializing an empty object.
        //     gameDescriptionBaseUrl: "https://api.rawg.io/api/games/",
        //     // gameDescriptionId: "",
        //     endGameDescriptionBaseUrl: "?key=",
        //     secondSearchUrl: "",
        //   };
        }

     //misc handlers
    //  getGameDescription = () => {
    //     this.setState({
    //       secondSearchUrl: this.state.gameDescriptionBaseUrl + this.apiGameId + this.state.endGameDescriptionBaseUrl + this.state.key
    //     }, () => (
    //       fetch(this.state.secondSearchUrl)
    //       .then(response => {return response.json() })
    //       .then(json => {
    //         const descToAdd = ""
    //         // for (variable in object){
    //         // statement}
    //         let desc = json.results
    //         for (let key in desc) {
    //             descToAdd += desc[key]
    //         }
    //         // json.results.forEach((desc) => {
    //         //     descToAdd.push(desc)
    //         // })
    //         this.setState({
    //           descriptions: descToAdd
    //         })
    //       }
    //       ), (err) => console.log(err)
    //     ))
    //   }
  
    //   componentDidMount() {
    //     this.getGameDescription();
    //   }

    render(){
        apiGameId = parseInt(window.location.search.slice(4));
    return(
        <div>
        {this.props.apiGames?.map((game, index)=> {
            if(game.id === apiGameId){
                return(
                    <div>
                    <ShowContainerAPI
                    key={index}
                    id={apiGameId}
                    gameTitle={game.name}
                    gameImage={game.background_image}
                    gameDuration = {game.playtime}
                    gameGenre = {game.genres}
                    gameRating = {game.rating}
                    // gameDescription = {desc.description}
                    />
                    <BackBtn />
                    </div>
                    )
                }
            })
        }
        </div>
        )   
    } 
}

export default ShowAPIGame