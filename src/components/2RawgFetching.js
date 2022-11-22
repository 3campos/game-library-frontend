import React, { useState, useEffect } from 'react'
// import axios from 'axios'

let key = process.env.REACT_APP_API_KEY

function ParentFunction {

const apiURL = 'https://api.rawg.io/api/games/'

const [myGames, setGameData] = useState()

let displayData
function AltRawgFetching() {
    fetch(apiURL)
    .then(response => response.json())
    .then(responseData => {
        displayData = responseData.map(function(todo) {
            return(
                <div key={todo.id}>{todo.title}</div>
            )
        })
        console.log(responseData)
        setShowPosts(displayData)
    })
    // return
}

    useEffect(() => {
        AltRawgFetching();
        }, []);

    return<>
            <div>
                    <ul>
                    {myGames}
                    </ul>
            </div>
            </>
}

export default AltRawgFetching
