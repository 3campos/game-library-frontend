import React, { useState, useEffect, useSearchParams } from 'react'

//the useSearchParams hook stores the search //results in the URL instead of state.
//source: https://www.youtube.com/watch?v=jIKBiFmlS4k&ab_channel=Codevolution

function Show() {
    const [searchParams, setSearchParams] =useSearchParams()
    //look into  searchParams.get('filter') with respect to favoriting games
    //https://www.youtube.com/watch?v=jIKBiFmlS4k&ab_channel=Codevolution
     return<>
         <div>'test'</div>
         <div>
            <div>User 1</div>
            <div>User 2</div>
            <div>User 3</div>
         </div>
         <div>
            <button onClick={() => setSearchParams({filter: 'active'})}>Game Details Page</button>
            <button onClick={() => setSearchParams({})}>Reset Page</button>
         </div>
    </>
 }

 export default Show