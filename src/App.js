// import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import Show from "./components/Show"
import New from "./components/NewGame"
import DataFetching from "./components/DataFetching"
import RawgFetching from "./components/RawgFetching"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect, useState } from 'react';

//define baseURL
let baseURL = process.env.REACT_APP_BACKEND_URL

//need to somehow include the substitution of state (useState, perhaps?) in the parent App function below.

function App(props) {
  const [secondInput, setSecondInput] = useState([{first: 'RAVIOLI', second: 'R@V10L1'}]);
  const [input, setInput] = useState('GIVE ME THE FORMUOLI');
                                    //^the default state is what is put in parens.


  // If lifecycle functions (mounting, updating and unmounting) need to be used with functional components, a special React hook called useEffect() needs to be used which behaves differently from lifecycle functions.
 
  const Example = () => {
    useEffect(()=> {
      <input value={input}/>
    });
    return (
      <h1> GET TO THE CHOPPA ..... ! </h1>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path ="/library"
        element={
        <>
          <Home />
          <RawgFetching />
          <Example />
          <DataFetching />
          {/* <div>
            {console.log({GetGameTitle})}
          </div> */}
          <input value={input}
          onChange={e => setInput(e.target.value)}
          />
          <input value={secondInput}
          onChange={e => setSecondInput(e.target.value)}
          />
        </>
        }
        />
        <Route path ='/show' element={
        <>
        
        {'BOB\'S BURGERS'}
        {<Show />}
        </> } />
        <Route path ="/new" element={<New />} />
      </Routes>
    </Router>
  );
}

export default App;

// Meeting with Phil:
// process.env variable is used to store the frontend url or backend url which you’re then using in the backend. Backend establishment is done in the server.js.
// In the frontend, what allows you to connect to the backend would be the fetches. The fetches are using the variables used in the backend url. It’s fetching from the variables,
// All of that logic in the frontend function is what’s getting data or sending data to the backend
// Then, in the backend, in the server you’re setting up the whitelist for cors.
// server.js cors setup on the backend
// frontend is making fetch requests
// work on frontend fetches: get post, put, delete in the frontend