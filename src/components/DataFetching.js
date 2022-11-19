import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setPosts(res.data)
            //the above line renders the data in the browser
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
        //the empty array ensures that the data is fetched only one time.
  return<>
    <div>
        <ul>
            {
                posts.map(post => <li key ={post.id}>{post.title} </li>)
            },{'HEY'},
            {
               console.log('line 25!', posts[0])
            }
        </ul>
    </div>
    </>
}

export default DataFetching