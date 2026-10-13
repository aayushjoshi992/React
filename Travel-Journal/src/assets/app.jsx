import Nav from "./nav.jsx"
import Entry from "./entry.jsx"
import data from "./data"
export default function App(){
    const entryElements=data.map((data)=>{
        return (
            <Entry
            {...data}
            />
        )
    })
    return(
        <>
        <Nav />
        <main className="container">
            {entryElements}
        </main>
    </>
    )
}