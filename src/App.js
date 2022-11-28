// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Home from "./components/Home"
import NewGame from './components/NewGame'
import NavBar from './components/NavBar'
import ShowAPIGame from './components/ShowAPIGame'
import ShowCustomGame from './components/ShowCustomGame'
import EditGame from './components/EditGame'
import EditBtn from './components/EditBtn'
// import ShowDescription from './components/ShowDescription'
// import Show from "./components/Show"
// import New from "./components/NewGame"
// import DataFetching from "./components/DataFetching"
// import RawgFetching from "./components/RawgFetching"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import { useEffect, useState } from 'react';

//define baseURL
let baseURL = process.env.REACT_APP_BACKEND_URL

//define key
// let key = process.env.REACT_APP_API_KEY

//need to somehow include the substitution of state (useState, perhaps?) in the parent App function below.

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      customGames: [{
        title:"",
        backgroundImage: "",
        playtime: "",
        genre: "",
        rating: "",
        // description: "",
      }],
        baseUrl: 'https://api.rawg.io/api/games?key=',
        key: process.env.REACT_APP_API_KEY,
        searchUrl: "",
      //for editing games, initializing an empty object.
      gameToEdit: {
        id: "",
        title:"",
        backgroundImage: "",
        playtime: "",
        genre: "",
        rating: "",
        notes: "",
      },
      // gameDescriptionBaseUrl: "https://api.rawg.io/api/games/",
      // // gameDescriptionId: "",
      // endGameDescriptionBaseUrl: "?key=",
      // secondSearchUrl: "",
    };
  }

  //CUSTOM GAME HANDLERS
    //accessing custom games from Atlas
    getGames = () => {
      fetch(baseURL)
      .then((res) => {
        if (res.status ===200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        this.setState({
          //obtaining data from database and updating state when the component mount
          customGames: data.allGames
        })
      });
    }

    handleAddGame = (game) => {
      const copyGames = [...this.state.customGames.games]
      copyGames.unshift(game)
      this.customGames.setState({
        customGames: copyGames,
      })
    }

    handleEditGame = (e) => {
      e.preventDefault()
    }

    passGameData = (gameToEdit) => {
      this.setState({gameToEdit: {
        id: gameToEdit.id,
        title: gameToEdit.title,
        backgroundImage: gameToEdit.backgroundImage,
        playtime: gameToEdit.playtime,
        genre: gameToEdit.genre,
        rating: gameToEdit.rating,
        notes: gameToEdit.notes,
      }
      })
    }

    handleDeleteGame = (id) => {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/${id}`, {
        method: 'DELETE'
      }).then( response => {
        const findIndex = this.state.customGames.findIndex(game => game._id === id)
        const copyCustomGames = [...this.state.customGames]
        copyCustomGames.splice(findIndex, 1)
        this.setState({customGames: copyCustomGames})
        console.log('end of handle delete');
      }).then(window.location.href=`https://game-library-frontend.herokuapp.com/`)
    }

    //API Game Handlers
    getSearchUrl = () => {
      this.setState({
        searchUrl: this.state.baseUrl + this.state.key
      }, () => (
        fetch(this.state.searchUrl)
        .then(response => {return response.json() })
        .then(json => {
          const gamesToAdd = []
          json.results.forEach((game) => {
            gamesToAdd.push(game)
          })
          this.setState({
            games: gamesToAdd
          })
        }
        ), (err) => console.log(err)
      ))
    }

    componentDidMount() {
      this.getGames();
      this.getSearchUrl();
      console.log(process.env)
      // this.getGameDescription();
    }

    render() {

      return(
        <Router>
          <NavBar />
          <Routes>
            <Route
              path='/'
              element={<Home
                customGames={this.state.customGames}
                apiGames={this.state.games}
                passExerciseData={this.passGameData}/>}
            />
            <Route
              path='/showapi'
              element={<ShowAPIGame
                apiGames={this.state.games}
                // gameDescription={this.state.descriptions}
                />}             
            />
            <Route
              path='/showcustom'
              element={<ShowCustomGame
                customGames={this.state.customGames}
                handleDeleteGame={this.handleDeleteGame}
                gameToEdit={this.state.gameToEdit}
                passGameData={this.passGameData}
                />}
            />
            <Route
              path='/new'
              element={<NewGame/>}
            />
            <Route
              path='/edit'
              element={<EditGame
                customGames={this.state.customGames}
                handleEditGame={this.handleEditGame}
                gameToEdit={this.state.gameToEdit}/>}
            />
            <Route
              element={<EditBtn
                customGames={this.state.customGames}
                handleDeleteGame={this.handleDeleteGame}
                gameToEdit={this.state.gameToEdit}
                passGameData={this.passGameData}/>}
              />
          </Routes>
        </Router>
      );
    }
}

export default App;

