import React, { useState, useEffect } from 'react'
import axios from 'axios'

function RawgFetching() {
    const [myGames, setGameData] = useState([])

    useEffect(() => {
        getGameData();
        }, []);
        // axios.get('http://localhost:3003/games')
        // axios.get('https://api.rawg.io/api/games/3328?key=876f15b6994d412a9f41668f5eeee5d5')
        //3328 represents the game's "id"

    const getGameData = async () => {
        const response = await fetch('http://localhost:3003/games')
        .then((response) => response.json());
        setGameData(response)
    }

    // .then(res => {
    //     console.log(res)
    //     setGameData(res.data)

    return<>
            <div>
                    <ul>
                    {/* {data.data.allGames} */}
                    {/* {'test'} */}
                    {/* {console.log('line32', games.allGames?.map(game=> <li key = {game.id}>{game.title}</li>))} */}
                    {myGames.allGames?.map(game=> <li key = {game.id}>Title:{game.title}</li>)}
                    </ul>
            </div>
            </>
        // console.log(res.data.allGames[0].author)
        // setGameData(res.data)
        //the above line renders the data in the browser
    
        // .catch(err => {
        //     console.log(err)
        // })
    

// myPetsAndFood.pets.map((pet) => {
//   console.log(pet.age)
// })

  // return<>
  //   <div>
  //         <ul>
  //         {/* {data.data.allGames} */}
  //         {/* {'test'} */}
  //         {console.log('line32', games.allGames.map(game=> <li key = {game.id}>{game.title}</li>))}
  //         </ul>
  //   </div>
  // </>
}

export default RawgFetching

// data.data.allGames.map(game => {
//                 console.log('yay', game)
//               })
//               games.map(game => 
//                 <li key ={game.id}>
//                   {game.title}
//                 </li>)