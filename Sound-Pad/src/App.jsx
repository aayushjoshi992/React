import padsData from "./pads"
import React from "react"
import Pad from "./Pad.jsx"


export default function App(props) {
    const [pads, setPads] = React.useState(padsData)
    
    function toggle(id){
       setPads(prevPads=>
            prevPads.map(item=>{
                return item.id==id ?{...item,on:!item.on}: item
            })
       )
        
    }

    const buttonElements = pads.map(pad => (
        <Pad key={pad.id} color={pad.color} id={pad.id} on={pad.on} toggle={toggle} />
    ))
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
