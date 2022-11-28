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

    //misc handlers
    // getGameDescription = () => {
    //   this.setState({
    //     secondSearchUrl: this.state.gameDescriptionBaseUrl + this.state.id + this.state.endGameDescriptionBaseUrl + this.state.key
    //   }, () => (
    //     fetch(this.state.secondSearchUrl)
    //     .then(response => {return response.json() })
    //     .then(json => {
    //       const descToAdd = ""
    //       // for (variable in object){
    //       // statement}
    //       let desc = json.results
    //       for (let key in desc) {
    //           descToAdd += desc[key]
    //       }
    //       // json.results.forEach((desc) => {
    //       //     descToAdd.push(desc)
    //       // })
    //       this.setState({
    //         descriptions: descToAdd
    //       })
    //     }
    //     ), (err) => console.log(err)
    //   ))
    // }

    componentDidMount() {
      this.getGames();
      this.getSearchUrl();
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

// function App(props) {
//   const [secondInput, setSecondInput] = useState([{first: 'RAVIOLI', second: 'R@V10L1'}]);
//   const [input, setInput] = useState('GIVE ME THE FORMUOLI');
                                    
//   // const Example = () => {
//   //   useEffect(()=> {
//   //     <input value={input}/>
//   //   });
//   //   return (
//   //     <h1> GET TO THE CHOPPA ..... ! </h1>
//   //   );
//   // }

//   function AtlasFetching() {
//     const [myGames, setGameData] = useState([])

//     useEffect(() => {
//         getGameData();
//         }, []);
//         // axios.get('http://localhost:3003/games')
//         // axios.get('https://api.rawg.io/api/games/3328?key=876f15b6994d412a9f41668f5eeee5d5')
//         //3328 represents the game's "id"

//     const getGameData = async () => {
//         const response = await fetch('http://localhost:3003/games')
//         .then((response) => response.json());
//         setGameData(response)
        
//     }

//     // .then(res => {
//     //     console.log(res)
//     //     setGameData(res.data)
//     getTitle = myGames.allGames?.map(game=> <li key = {game._id}>Title:{game.title}</li>)
//     return<>
            
//             <div>
//                     <ul>
//                       {getTitle}
//                     </ul>
//             </div>
//             </>
// }

//   return (
    
//     <Router>
//       <Routes>
//         <Route path ="/library"
//         element={
//         <>
//           <Home />
//           <AtlasFetching />
//           {/* <Example /> */}
//           {/* <DataFetching /> */}
//           {/* <div>
//             {console.log({GetGameTitle})}
//           </div> */}
//           {/* <input value={input}
//           onChange={e => setInput(e.target.value)}
//           />
//           <input value={secondInput}
//           onChange={e => setSecondInput(e.target.value)}
//           /> */}
//         </>
//         }
//         /> 
//         {/* <Route path ='/show' element={
//         <>
//         <AtlasFetching/>
//         {'BOB\'S BURGERS'}
//         <Show
//           titulo={getTitle}
//         /> */}
//         {/* <Show> */}
//           {/* {console.log(myGames)} */}
//           {/* <AtlasFetching getGameData={myGames}/> */}
//           {/* {myGames.allGames?.map(game=> <li key = {game._id}>Title:{game.title}</li>)}
//           {game.title} */}
//           {/* {myGames.allGames} */}
//         {/* </Show> */}
//         {/* </> } />  */}
//         <Route path ='/library/:id' element={<RawgFetching/>} />
//         <Route path ="/new" element={<New />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// Meeting with Phil:
// process.env variable is used to store the frontend url or backend url which you’re then using in the backend. Backend establishment is done in the server.js.
// In the frontend, what allows you to connect to the backend would be the fetches. The fetches are using the variables used in the backend url. It’s fetching from the variables,
// All of that logic in the frontend function is what’s getting data or sending data to the backend
// Then, in the backend, in the server you’re setting up the whitelist for cors.
// server.js cors setup on the backend
// frontend is making fetch requests
// work on frontend fetches: get post, put, delete in the frontend