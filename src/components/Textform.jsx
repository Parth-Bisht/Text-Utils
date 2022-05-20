import React from "react";
export default function Textform(props) {
    const handleChange = (e)=>{
        setText(e.target.value)
    }
    const handleUpclick = ()=>{
        let newTxt = text.toUpperCase();
        setText(newTxt);
        props.showalert("Converted to Uppercase","success")        
    }
    const handleLowclick = ()=>{
        let newTxt = text.toLowerCase();
        setText(newTxt);
        props.showalert("Converted to Lowercase","success")        
    }
    const handleClear = ()=>{
        let newTxt = '';
        setText(newTxt);
        props.showalert("Text cleared","success") 
        
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showalert("Text copied","success") 
    }
    const handleExtraSpace = ()=>{
        let newTxt = text.split(/[ ]+/);
        setText(newTxt.join(" "))
        props.showalert("Text updated","success") 
    }
    const [text,setText] = React.useState("")
  return (
    <>
      <div className="mb-2 my-3">
      <h1>{props.heading}</h1>
        <textarea
        style={{backgroundColor:props.mode=="dark"?"grey":"white",color:props.mode=="dark"?"white":"black"}}
          className="form-control"
          id="myBox"
          value={text}
          onChange={handleChange}
          rows="8"
        ></textarea>
        <button disabled={text.length===0} onClick={handleUpclick} className="btn btn-primary mx-1 my-3">Convert to Uppercase</button>
        <button disabled={text.length===0} onClick={handleLowclick} className="btn btn-primary mx-1 my-3">Convert to Lowercase</button>
        <button disabled={text.length===0} onClick={handleClear} className="btn btn-primary mx-1 my-3">Clear Text</button>
        <button disabled={text.length===0} onClick={handleCopy} className="btn btn-primary mx-1 my-3">Copy Text</button>
        <button disabled={text.length===0} onClick={handleExtraSpace} className="btn btn-primary mx-1 my-3">Remove extra spaces</button>
      </div>
      <div className="container">
          <h1>Your text summary</h1>
          <p>{text.split(/\s+/).filter((el)=>el.length!==0).length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length===0.008? 0:0.008 * text.split(" ").length} minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"Enter Something in the above box to preview here"}</p>
      </div>
    </>
  );
}
