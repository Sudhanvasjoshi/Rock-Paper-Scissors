import React,{useContext} from 'react'
import {RPContext} from '../Helper/RPScontext';
function HowToPlay() {
  const {direction , setDirection} = useContext(RPContext)  
  return (
    <div className=" container w-screen h-screen flex justify-center bg-pink-200">
      <div className="w-[40%] h-[63%] card  my-3 shadow-lg rounded-md border"><p className="text-[25px] mx-[40%] font-semibold my-4 p-2 text-red-400">Tutorials</p>
      <div className="mx-2 items-start flex"><p className="text-[20px] p-4 font-medium text-blue-400">Rules For Playing this game are</p>
      </div>
      <div className="mx-3 items-start">The User is allowed to choice 3 options <span className="font-semibold text-lg  text-blue-500">Rock</span><span className="font-semibold text-lg mx-2 text-emerald-500">Paper</span><span className="font-semibold text-lg  text-violet-700">Scissor</span>
      Then The Computer will also choose any of the above options and then both options are compared
      <br/><span className="font-semibold text-orange-500 my-2 text-[25px]">Paper Vs Rock ----{'>'} Paper wins</span><br/>
      <span className="font-semibold text-yellow-800 my-2 text-[25px]">Paper Vs Scissor ----{'>'} Scissor wins</span>
      <br/>
      <span className="font-semibold text-violet-800 my-2 text-[25px]">Scissor Vs Rock ----{'>'} Rock wins</span>
      
      </div>
      <div className="m-2 text-lg">Choose wisely the you will win the game!!!</div>
      <div className="m-2 items-center justify-start flex flex-col"><button className="btn btn-danger p-2 rounded-md" onClick={() => {setDirection("Start")}}>Back</button></div>
      </div>
     
    </div>
  )
}

export default HowToPlay
