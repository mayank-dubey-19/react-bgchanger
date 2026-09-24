import { useState } from 'react'
import './App.css'

function App() {
  const [background , setBackground] = useState("beige")

  return (
    <>
      <div className="container1" style={{backgroundColor: background}}>
        <div className="container2">
          <div className="container3" style={{backgroundColor: "brown"}}>
            <button style={{backgroundColor: "brown"}} onClick={() => setBackground("brown")}>Brown</button>
          </div>
          <div className="container3" style={{backgroundColor: "pink"}}>
            <button style={{backgroundColor: "pink"}} onClick={() => setBackground("pink")}>pink</button>
          </div>
          <div className="container3" style={{backgroundColor: "red"}}>
            <button style={{backgroundColor: "red"}} onClick={() => setBackground("red")}>red</button>
          </div>
          <div className="container3" style={{backgroundColor: "yellow"}}>
            <button style={{backgroundColor: "yellow"}} onClick={() => setBackground("yellow")}>yellow</button>
          </div>
          <div className="container3" style={{backgroundColor: "green"}}>
            <button style={{backgroundColor: "green"}}  onClick={() => setBackground("green")}>green</button>
          </div>
          <div className="container3" style={{backgroundColor: "blue"}}>
            <button style={{backgroundColor: "blue"}} onClick={() => setBackground("blue")}>blue </button>
          </div>
          <div className="container3" style={{backgroundColor: "black"}}>
            <button style={{backgroundColor: "black", color: "white"}} onClick={() => setBackground("black")}>black</button>
          </div>
          <div className="container3" style={{backgroundColor: "white"}}>
            <button style={{backgroundColor: "white"}} onClick={() => setBackground("white")}>white</button>
          </div>
          <div className="container3" style={{backgroundColor: "orange"}}>
            <button style={{backgroundColor: "orange"}} onClick={() => setBackground("orange")}>orange</button>
          </div>
          <div className="container3" style={{backgroundColor: "royalblue"}}>
            <button style={{backgroundColor: "royalblue"}} onClick={() => setBackground("royalblue")}>royalblue</button>
          </div>
          <div className="container3" style={{backgroundColor: "purple"}}>
            <button style={{backgroundColor: "purple"}} onClick={() => setBackground("purple")}>purple</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
