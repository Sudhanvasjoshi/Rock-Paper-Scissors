import React,{useContext} from 'react'
import {RPContext} from '../Helper/RPScontext';
function Start() {
  const {direction , setDirection} = useContext(RPContext)
  return (
    <div className=" container  w-screen h-screen justify-center flex  bg-gray-300 p-4">
      <div className = "card items-center bg-green-400 w-[40%] h-[60%] shadow-lg">
      <div className="my-4 p-2"><p className="text-[30px] font-semibold text-blue-700">Welcome to Rock Paper Scissors Game</p></div>
      <div className="items-center justify-center p-6 font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ipsam numquam, iusto sint aspernatur ad cupiditate reiciendis laboriosam facere assumenda, eligendi placeat in voluptatibus amet voluptatem aut voluptates eum fugiat?</div>
      <div className="items-center justify-center my-3"><button className="btn btn-primary rounded-md" onClick={() => {setDirection("Tutorials")}}>How to play</button></div>
      <div className="items-center justify-center my-2"><button className="btn btn-danger" onClick={() => {setDirection("Game")}}> Start the game</button></div>
    </div>
    </div>
    
  )
}

export default Start
