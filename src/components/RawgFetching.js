// import React, { useState, useEffect } from 'react'
// // import axios from 'axios'

// function RawgFetching() {
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

//     return<>
    
//             <div>
//                     <ul>
//                     {myGames.allGames?.map(game=> <li key = {game._id}>Title:{game.title}</li>)}
//                     {console.log(myGames.allGames?.map(game=> <li key = {game._id}>Title:{game.title}</li>))}
//                     </ul>
//             </div>
//             </>
// }

// export default RawgFetching
