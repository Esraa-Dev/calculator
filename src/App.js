import React from 'react'
import  "./App.css"
import {useState}from "react"
function App() {
  const [result,setResult]=useState("");
  const handleClick= (e)=>{
console.log(typeof(e.target.name));
setResult(result+e.target.name)
  }
  const calc=()=>{
    try {
      setResult(Number(eval(result).toString()).toFixed(2));
    } catch (error) {
      setResult("invalid format");
    }
  }
  

  const clear=()=>{
setResult("")
  }
  const backSpace=()=>{
    setResult(result.slice(0,-1));
  }
  return (
    <div class="app">
      <div className="container">
        <h1 class="title">React Calculator</h1>
        <div className="calculator">
          <input value={result} />
          <div className="calculator-btn">
            <button class="btn-span2" onClick={clear}>
              C
            </button>
            <button onClick={backSpace}>&larr;</button>
            <button onClick={handleClick} name="/">
              &divide;
            </button>
            <button onClick={handleClick} name="7">
              7
            </button>
            <button onClick={handleClick} name="8">
              8
            </button>
            <button onClick={handleClick} name="9">
              9
            </button>
            <button onClick={handleClick} name="*">
              *
            </button>
            <button onClick={handleClick} name="4">
              4
            </button>
            <button onClick={handleClick} name="5">
              5
            </button>
            <button onClick={handleClick} name="6">
              6
            </button>
            <button onClick={handleClick} name="-">
              -
            </button>

            <button title="red" onClick={handleClick} name="1">
              1
            </button>
            <button onClick={handleClick} name="2">
              2
            </button>
            <button onClick={handleClick} name="3">
              3
            </button>
            <button onClick={handleClick} name="+">
              +
            </button>
            <button className="btn-span-3" onClick={handleClick} name="0">
              0
            </button>
            <button onClick={calc}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App