import React from "react";

function Home(){
    return<>
    <h1 className="text-3xl text-fuchsia-600 font-bold underline italic">
    <span className="text-3xl text-emerald-300 not-italic"> Hi </span> West <span className="text-3xl text-emerald-300 not-italic"> World! </span>
    </h1>
    {console.log(process.env.REACT_APP_BACKEND_URL)}
    </>
}

export default Home