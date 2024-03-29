import './App.css';
import React, { Component } from 'react'
import Home from "./components/Home"
import NewGame from './components/NewGame'
import NavBar from './components/NavBar'
import ShowAPIGame from './components/ShowAPIGame'
import ShowCustomGame from './components/ShowCustomGame'
import EditGame from './components/EditGame'
import EditBtn from './components/EditBtn'
import Auth from './components/Auth'
import Register from './components/Register'
import { BrowserRouter as Router, Switch, Routes, Route } from "react-router-dom"
import axios from 'axios';
import ShareGameBtn from './components/ShareGameBtn';

//define baseURL
let baseURL = process.env.REACT_APP_BACKEND_URL

let usersURL = process.env.REACT_APP_BACKEND_USERS_URL

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
        dbIdForGame: "",
        creatorsGoogleId: "",
        permittedUsers: [{permittedName: ""}]
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
        dbIdForGame: "",
        creatorsGoogleId: "",
        permittedUsers: [{
          permittedName: ""
        }]
      },
      //oAuth Current Login State
      uniqueDbId: "",
      googleId: "",
      userObject: "",
      userName: "",
      databaseUsers: [{
          googleId: "",
          username: ""
        }]
    };
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
        dbIdForGame: gameToEdit.dbIdForGame,
        creatorsGoogleId: gameToEdit.creatorsGoogleId,
        permittedUsers: gameToEdit.permittedUsers
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

    getUser = () => {
      axios.get(
        "https://game-library-backend-ec.herokuapp.com/getuser", {withCredentials: true})
      .then((res) => {
        console.log(res);
        if(res){
          this.setState({
            uniqueDbId: res.data._id,
            googleId: res.data.googleId,
            userObject: res.data,
            userName: res.data.username,
          })
        }
      });
    }

    getAllUsers = () => {
      fetch(usersURL)
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
          databaseUsers: data.allUsers
        })
      });
    }

    componentDidMount() {
      this.getGames();
      this.getApiGameUrl();
      this.getUser();
      //uncomment this when done with testing
      this.getAllUsers();
    }

    render() {
      return(
        <Router>
          <NavBar 
            userGoogleId={this.state.googleId}
            userObject={this.state.userObject}
            userName={this.state.userName}
            uniqueDbId={this.state.uniqueDbId}
          />
              <Routes>
                <Route
                  path='/'
                  element={<Home
                    uniqueDbId={this.state.uniqueDbId}
                    userName = {this.state.userName}
                    customGames={this.state.customGames}
                    apiGames={this.state.games}
                    userGoogleId={this.state.googleId}
                    passGameData={this.passGameData}
                    databaseUsers={this.state.databaseUsers}
                    />}
                />
                <Route 
                path='/auth'
                element={
                  <Auth
                  userGoogleId = {this.state.googleId}
                  userObject = {this.state.userObject}
                  userName = {this.state.userName}
                  getUserData={this.getUser}
                  />
                }
                />
                <Route 
                path='/register'
                element={
                  <Register
                  userGoogleId = {this.state.googleId}
                  userObject = {this.state.userObject}
                  userName = {this.state.userName}
                  getUserData={this.getUser}
                  />
                }
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
                    uniqueDbId={this.state.uniqueDbId}
                    userGoogleId = {this.state.googleId}
                    databaseUsers={this.state.databaseUsers}
                    userName = {this.state.userName}
                    getAllUsers={this.getAllUsers}
                    />}
                />
                <Route
                  path='/new'
                  element={<NewGame
                    uniqueDbId={this.state.uniqueDbId}
                    userGoogleId = {this.state.googleId}
                  />}
                />
                <Route
                  path='/edit'
                  element={<EditGame
                    customGames={this.state.customGames}
                    handleEditGame={this.handleEditGame}
                    gameToEdit={this.state.gameToEdit}
                    passGameData={this.passGameData}
                    userGoogleId = {this.state.googleId}/>}
                />
                <Route
                  element={<EditBtn
                    customGames={this.state.customGames}
                    handleDeleteGame={this.handleDeleteGame}
                    gameToEdit={this.state.gameToEdit}
                    passGameData={this.passGameData}
                    userGoogleId = {this.state.googleId}/>}
                  />
              </Routes>
        </Router>
      );
    }
}

export default App;