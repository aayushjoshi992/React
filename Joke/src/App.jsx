export default function Jokes(props){
    return (
      <>
    <div className="main">
      <p>
        {props.setup}
      </p>
      <h1>
        {props.punchline}
      </h1>
    </div>
    </>
    )
}