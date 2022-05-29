import React,{useState} from 'react'

export default function TextForm(props) {

    const [text,setText] = useState("");
    const handleUpClick = () => {
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }

    const handleLowClick = () => {
        console.log("Lowercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }

    const handleClearClick = () => {
        console.log("Clear was clicked " + text);
        setText('');
        props.showAlert("Text Cleared", "success");
    }

    const handleOnChange = (event) => {
        console.log("on Change");
        setText(event.target.value);
    }
const handleCopy = () => {
    console.log ("Copying text");
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
}

const handleExtraSpaces =() => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
}
  return (
    <>
    <div className='container'>
            <div className="mb-3">
            <h1 style={{ color : props.mode==="light"?"black":"white"}}>{props.heading}</h1>
            <textarea className="form-control" id="textbox" value={text} style={{ backgroundColor : props.mode==="light"?"white":"#D0CFFF",  color : props.mode==="light"?"black":"#4F0171"}} rows="8" onChange={handleOnChange}></textarea>
            </div>
            <button disabled= {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled= {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to lowercase</button>
            <button disabled= {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
            <button disabled= {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            <button disabled= {text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3"  style={{ color : props.mode==="light"?"black":"white"}}>
            <h2>Text Summary</h2>
            <p>Number of words : {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
            <p>Number of characters : {text.length}</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>

            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter text to preview it"}</p>
    </div>
    </>
  )
}
