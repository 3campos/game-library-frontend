import './App.css';
import React, { Component } from 'react'
import Home from "./components/Home"
import NewGame from './components/NewGame'
import NavBar from './components/NavBar'
import ShowAPIGame from './components/ShowAPIGame'
import ShowCustomGame from './components/ShowCustomGame'
import EditGame from './components/EditGame'
import EditBtn from './components/EditBtn'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//define baseURL
let baseURL = process.env.REACT_APP_BACKEND_URL

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
        notes: "",
      }],
        baseUrl: 'https://api.rawg.io/api/games?key=',
        key: process.env.REACT_APP_API_KEY,
        apiSearchUrl: "",
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
      //oAuth Login State
      currentId: "",
    };
  }

  //oAuth setState
  setCurrentId = () => {
    this.setState({
      currentId: this.state.currentId
    }), () => {
      fetch(this.state.currentId)
      .then(response => {return response.json() })
      .then(json => {
        const 
      })
    }
  }

  //CUSTOM GAME HANDLERS
    //accessing custom games
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
    getApiGameUrl = () => {
      this.setState({
        apiSearchUrl: this.state.baseUrl + this.state.key
      }, () => (
        fetch(this.state.apiSearchUrl)
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
      this.getApiGameUrl();
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
                passGameData={this.passGameData}
                />}
            />
            <Route
              path='/showapi'
              element={<ShowAPIGame
                apiGames={this.state.games}
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
            <Route 
            path='/userlogin'
            element={
              <Form
              userCurrentId = {this.state.currentId}
              setCurrentId={this.setCurrentId}
              />
            }
            />
          </Routes>
        </Router>
      );
    }
}

export default App;