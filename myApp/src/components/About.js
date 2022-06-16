import React, { useState } from 'react'

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white"
  })

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid cyan",
        width: "100%"
      })
      setBtnText("Enable Light Mode");
    }

    else {
      setMyStyle({
        color: "black",
        backgroundColor: "white"
      })
      setBtnText("Enable Dark Mode");
    }

  }

  return (
    <div className="container" style={myStyle}>
      <h2>About Us</h2>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            Text Utils
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body" style={myStyle}>
              <strong>Text Utils is a text utility application which allows you to perform CRUD operations on your text along with providing basic analysis of what's beig written.</strong> 
            </div>
          </div>
        </div>

      </div>
    <div className="container my-3">
      <button onClick={toggleStyle} className='btn btn-primary my-3'>{btnText}</button>
    </div>
</div >
  )
}
