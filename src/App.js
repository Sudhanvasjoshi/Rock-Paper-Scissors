//import './App.css';
import React,{useState} from "react";
import HowToPlay from "./component/HowToPlay";
import MainGame from "./component/MainGame";
import Start from "./component/Start";
import {RPContext} from './Helper/RPScontext'
function App() {
  const [direction , setDirection] = useState("Start");
  return (
    <div className="">
      <RPContext.Provider value={{direction,setDirection}}>
      {direction === "Start" && <Start/>}
      {direction === "Tutorials" && <HowToPlay/>}
      {direction === "Game" && <MainGame/>}
      </RPContext.Provider>
    </div>
  );
}

export default App;
