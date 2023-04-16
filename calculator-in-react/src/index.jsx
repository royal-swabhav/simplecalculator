import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './index.css'
import List from './List'

  const App = () =>{
    const [value, updateValue] = useState(0);
    const [secondvalue, secondupdateValue] = useState(0);
    const [maltiplication, setMultiplacation] =useState(0);
    const [division, setDivision] =useState(0);
    const [addition, setAdd] =useState(0);
    const [substraction, setSub] =useState(0);
   
     useEffect(()=>{
      setMultiplacation(value * secondvalue);
    
     })
     useEffect(()=>{
      setDivision(value / secondvalue);
    
     })
     useEffect(()=>{
      setAdd(value + secondvalue);
    
     })
     useEffect(()=>{
      setSub(value - secondvalue);
    
     })
    return(
    <div>
     <h1>multiplication {value} * {secondvalue}={maltiplication}</h1>
     <h1>division {value} / {secondvalue}={division}</h1>
     <h1>addition {value} + {secondvalue}={addition}</h1>
     <h1>substraction {value} - {secondvalue}={substraction}</h1>

     <input type="number" value={value} onChange={(e)=>{
      updateValue(e.target.value)
     }}/>
      <input type="number" value={secondvalue} onChange={(e)=>{
      secondupdateValue(e.target.value)
     }}/>
    </div>
    )
  }

 
 ReactDOM.render(
  <App />,
  document.getElementById("root")
 );

 export default App;