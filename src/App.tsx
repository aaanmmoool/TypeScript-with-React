
import './App.css'
import { useState } from 'react'
import InputField from './components/InputField'

import CounterNumber from './components/number'



const App = () => {
 
  const [isVisible, setIsVisible] :[boolean, any] = useState(false);
  const [isVisibleTODO, setIsVisibleTODO] :[boolean, any] = useState(false);
  
  


  return (
    <>

      <h1> Small Small Projects</h1>
     <div>
        <button onClick = { ()=> {
         setIsVisible(!isVisible)
         
       }} style={{
        backgroundColor : isVisible ? "#333" : " ",
        padding:"10px",
        margin:"10px"
       }} >
        Counter
       </button>
        {isVisible && <CounterNumber/>}

     </div>
      <div >
        <button onClick = { ()=> {
         setIsVisibleTODO(!isVisibleTODO)
         
       }} style={{
        backgroundColor : isVisibleTODO ? "#333" : " ",
        padding:"10px",
        margin:"10px"
       }} >
        To-Do-List
       </button>
        {isVisibleTODO && <InputField/>}

     </div>
     

    
  



     </>
   
  )
}

export default App
