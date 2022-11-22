import React, { useState, useEffect } from 'react'
// import axios from 'axios'

let key = process.env.REACT_APP_API_KEY

function RawgFetching() {
    const [myGames, setGameData] = useState([{
        baseURL: 'https://api.rawg.io/api/games/',
        id: '',
        key: process.env.REACT_APP_API_KEY,
    }])

    useEffect(() => {
        getGameData();
        }, []);

    const getGameData = async () => {
        const response = await fetch('https://api.rawg.io/api/games/')
        .then((response) => response.json());
        setGameData(response)
    }

    // .then(res => {
    //     console.log(res)
    //     setGameData(res.data)

    return<>
    
            <div>
                    <ul>
                    {myGames.allGames?.map(game=> <li key = {game._id}>Title:{game.title}</li>)}
                    {console.log(myGames.allGames?.map(game=> <li key = {game._id}>Title:{game.title}</li>))}
                    </ul>
            </div>
            </>
}

export default RawgFetching
