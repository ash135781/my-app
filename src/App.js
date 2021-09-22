import logo from './logo.svg';
import Navbar from './componentss/Navbar';
import Form from './componentss/Form'
// import About from './componentss/About';
import React, { useState } from 'react'
import Alert from './componentss/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


export default function App() {
  const [modes, setMode] = useState("dark")
  const [chgtext, setchgtext] = useState("Enable Light Mode")
  const [chgtext1, setchgtext1] = useState("Enable Light Mode")
  const [chgtext2, setchgtext2] = useState("Enable Light Mode")
  const [allert, setalert] = useState(null)
  let getsmart = (command,type) => {
    setchgtext1( {
      command : command,
      type : type
    })
  }
    let ggetsmart = (command2,type2) => {
      setchgtext2( {
        command : command2,
        type : type2
      })
  }
  let gggetsmart = (commandd,typee) => {
    setchgtext2( {
      command : commandd,
      type : typee
    })
}
  let showalert=(message,type) => {
    setalert({
    msg: message,
    type: type
  })
  setTimeout(() => {
  setalert(null)
  },3000)
}
  const toggleMode = ()=>{
 if(modes === 'light'){
   setMode("dark")
   gggetsmart("Enable light Mode", document.body.style.backgroundColor = "grey")
   
   
   document.title = "textUtils-DarkMode"
   showalert("dark mode has enabled","success")
   
  }
  
  else{
    
    
    gggetsmart("Enable green Mode", document.body.style.backgroundColor = "white")
   
   setMode("light")
   document.title = "textUtils-LightMode"
     
     showalert("light mode has enabled","success")

 }
  }
  const toggleMode1 = ()=>{
    if(modes === 'light'){
      setMode("dark")
      gggetsmart("Enable light Mode", document.body.style.backgroundColor = "grey")
      
      
      
      showalert("dark mode has enabled","success")
      
     }
     
     else{
       
      
       ggetsmart("Enable green Mode", document.body.style.backgroundColor = "#3c523c")
      
      setMode("light")
        
        showalert("green mode has enabled","success")
   
    }
     }
     const toggleMode2 = ()=>{
      if(modes === 'light'){
        setMode("dark")
        ggetsmart("Enable light Mode", document.body.style.backgroundColor = "grey")
        
        
        
        showalert("dark mode has enabled","success")
        
       }
       
       else{
         
         
         ggetsmart("Enable Dark Mode", document.body.style.backgroundColor = "#4c5eb5")
        setMode("light")
          
          showalert("blue mode has enabled","success")
     
      }
       }
  return (
    <>
    

    <Navbar change1={getsmart} change2={ggetsmart} change={gggetsmart}  mode= {modes} toggleMode={toggleMode} toggleMode2={toggleMode1} toggleMode1={toggleMode2}/>
    <Alert alert= {allert}  />
    <div className='container my-3'>
      <Form showalert= {showalert} mode= {modes} /> 
      {/* <Form heading="enter the te xt"/> */}

    </div>
    
  
    </>
  );
}

