const Hello = (props) => {
  const name = props.name
  const age = props.age

  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}



const App = () =>{
  return(
    <div>
    <Hello name={"Sigrid"} age={35}/>
    </div>

  )
}

export default App;