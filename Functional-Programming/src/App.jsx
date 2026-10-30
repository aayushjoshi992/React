import React from "react"
import { useEffect } from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)
    
    
    useEffect(()=>{
    fetch(`https://swapi.dev/api/people/${count}`)
    .then(res=>res.json())
    .then(data=>setStarWarsData(data))
    
},[count])
    
    
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}