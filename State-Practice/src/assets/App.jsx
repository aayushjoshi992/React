import React from "react"

export default function App() {
    let [check,setcheck]=React.useState(true)
    function click(){
        setcheck(!check)   
    }

    return (
        <main className="container">
            
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button className="value" onClick={click}>{check?"Yes":"No"}</button>
        
        </main>
    )
}
