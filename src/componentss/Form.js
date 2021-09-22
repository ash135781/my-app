import React, {useState} from 'react'


export default function Form(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        textChange(newText)
        props.showalert('converted to upper case',"success")
    }
    const handledClick = () =>{
        let newText = text.toLowerCase();
        textChange(newText)
        props.showalert('converted to lower case',"success")
    }
    const handleOnChange = (event)=>{
        console.log("OnChange")
        textChange(event.target.value)
    }
    const [text,textChange] = useState("enter text here");
    return (

        <>
      <div style={{backgroundColor: props.mode==="light"?"white":"grey" }}>
          <h3 style={{backgroundColor: props.mode==="light"?"grey":"white"}}>{props.heading}</h3>
          <div className="mb-3">
          <textarea onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"white":"grey",color: props.mode==="dark"?"grey":"white"}}  className="form-control" id='mybox' rows='8' placeholder={text}></textarea>
      </div>
      <button onClick={handleUpClick} className='btn btn-primary '>convert to uppercase</button>
      <button onClick={handledClick} className='btn btn-primary mx-4'>convert to lowercase</button>
      </div>
      <div style={{backgroundColor: props.mode==="light"?"white":"grey",color: props.mode==="dark"?"white":"grey"}} className="container my-3">
          <h1>Your Summary</h1>
          <p>{text.trimEnd().split(/[ ]+/).length} words,{text.length} characters</p>
          <p>{0.008 * text.split(" ").length.toFixed(3)} minutes read</p>
          <h2>preview</h2>
          <p>{text.length>0?text:"kuch daal bhai"}</p>
      </div>

        </>
    )
}