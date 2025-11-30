
 import { useState } from "react";


const CounterNumber = () =>{
 
 const [counter, setCounter] : [number,any] = useState(0);

const INC = () =>{
    setCounter(counter+1); 
  }
const DEC = () =>{
   setCounter(counter-1); 
  }

  return (
    <>
      <h1> Chota Counter</h1>
         
         <h2>{counter}</h2>
         <div style={{
            display:"flex",
            gap:"10px"
         }}>
         <button onClick = {INC}>+1</button>
         <button onClick = {DEC}>-1</button>
         </div>
         
     </>
  )
 }

 export default CounterNumber