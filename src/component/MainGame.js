import React,{useState , useContext} from 'react';
import {FaHandRock} from 'react-icons/fa';
import {FaHandPaper} from 'react-icons/fa';
import {FaHandScissors} from 'react-icons/fa';
import Alert from './Alert';
import {RPContext} from '../Helper/RPScontext';
// import HowToPlay from './HowToPlay';
// import Start from './Start';
function MainGame() {
  const {direction,setDirection} = useContext(RPContext);
  const [choose,setchoose] = useState("noinput");
  const [show,setShow] = useState(true);
  const [compchoice, setcompchoice] = useState("");
  const [alert, showAlert] = useState(null);
  const [result, setResult] = useState("");
  const showAler = (message,type) =>
  {
    showAlert({
      msg:message,
      type: type
    })
    setTimeout(()=>{
      showAlert(null);
    },1000
    )
    setShow(true)
  }
  const rps = () =>{
    {choose === "noinput"?showAler("You have to select rock paper or scissors","please") : 
    setShow(false)
    let x = Math.floor((Math.random() * 3) + 1)
    {x===1 && setcompchoice("Rock")}
    {x===2 && setcompchoice("Paper")}
    {x===3 && setcompchoice("Scissors")}
    if(choose.localeCompare(compchoice) === 0)
    {
      setShow(true)
    }
    else if(choose.localeCompare("Rock") === 0 && compchoice.localeCompare("Paper") === 0)
    {
      setResult("Computer")
    }
    else if(choose.localeCompare("Paper") === 0 && compchoice.localeCompare("Rock")=== 0)
    {
      setResult("User")
    }
    else if( choose.localeCompare("Paper") === 0 && compchoice.localeCompare("Scissors")=== 0)
    {
      setResult("User")
    }
    else if(choose.localeCompare("Scissors") === 0 && compchoice.localeCompare("Paper") === 0)
    {
      setResult("Computer")
    }
    else if(choose.localeCompare("Scissors") === 0 && compchoice.localeCompare("Rock") === 0)
    {
      setResult("Computer")
    }   
    else
    {
      setResult("User")
    }  
    
    } 
   
  }
  return (
    <div className="w-screen h-screen  justify-center">
      <Alert  alert = {alert}/>
      <div className="my-[50px] py-6 card container w-[60%] h-[75%]  shadow-lg text-xl font-semibold"><p className="items-center flex flex-col">Lets Start The Game !!!!</p>
      {show && <div className="card container w-[60%] h-[80%] flex flex-col  items-center justify-center my-5 gap-4"> <div className="flex flex-col items-center justify-center gap-2 my-2"><span className="card w-[90px] flex flex-col items-center cursor-pointer"onClick={()=>{setchoose("Paper")}}><FaHandPaper className="my-2 text-[30px]"/><p className="text-gray-500 font-semibold">Paper</p></span><span className="card w-[90px] flex flex-col items-center cursor-pointer" onClick={()=>{setchoose("Rock")}}><FaHandRock className="text-[20px]  my-2"/><p className="text-gray-500">Rock</p></span><span className="card w-[90px] flex flex-col items-center cursor-pointer" onClick={()=>{setchoose("Scissors")}}><FaHandScissors className="text-[20px]  my-2"/><p className="text-gray-500">Scissors</p></span></div>
      <button className="bg-violet-500 w-[95px] h-[65px] rounded-lg flex flex-col items-center justify-center my-3 shadow-lg" onClick={rps}>Continue</button>
      </div>}
      {show === false ?<div className="flex flex-col items-center"> 
      <div className="my-5  card w-[420px] h-[290px] items-center justify-center">
        <div className="flex flex-row gap-7"><div className="card w-[90px] h-[90px]  items-center justify-center text-xl">{choose}</div>
        <div className="text-4xl font-semibold my-4">VS</div>
        <div className="card flex  w-[90px] h-[90px] items-center justify-center text-xl">{compchoice}</div></div>
        <div className="flex flex-row gap-[100px] mt-2"><div className="text-sm">User's Choice</div><div className="text-sm flex-wrap mx-2 items-center justify-center">Computer's <div>Choice</div></div></div>
        </div>
        <div>Result : {result} wins !!!!</div>
        <div className="flex flex-row mt-4 gap-6"> <button className="btn btn-primary rounded-lg" onClick={()=>{setShow(true)}}>Play Again</button> <button className="btn btn-success gap-6" onClick={()=> {setDirection("Tutorials")}}>Rules</button>
        <button className="bg-violet-600 btn rounded-lg font-semibold text-white" onClick={()=>{setDirection("Start")}}>Start</button>
        </div>
        </div>:<div></div>
        }

      </div>
      
    </div>
  )
}

export default MainGame