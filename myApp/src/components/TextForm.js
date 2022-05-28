import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("");
    const handleUpClick = () => {
        console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        console.log("Lowercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClearClick = () => {
        console.log("Clear was clicked " + text);
        setText('');
    }

    const handleOnChange = (event) => {
        console.log("on Change");
        setText(event.target.value);
    }
  return (
    <>
    <div className='container'>
            <div className="mb-3">
            <h1>{props.heading}</h1>
            <textarea className="form-control" id="textbox" value={text} rows="8" onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>

    <div className="container my-3">
            <h2>Text Summary</h2>
            <p>Number of words : {text.split(" ").length}</p>
            <p>Number of characters : {text.length}</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>

            <h2>Preview</h2>
            <p>{text}</p>
    </div>
    </>
  )
}
