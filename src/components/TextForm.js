import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLpClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
  };

  const [text, setText] = useState("Enter text here..................");

  const [myStyle, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("Enable dark mode");

  const toggleState = () => {
    if (btnText === "Enable dark mode") {
      setStyle({
        color: "white",
        backgroundColor: "black",
        border: "2px solid black",
      });
      setBtnText("Enable white mode");
    } else {
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable dark mode");
    }
  };

  return (
    <div style={myStyle}>
      <div className="container my-3">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={toggleState}
          />
          <label className="form-check-label">{btnText}</label>
        </div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="myBox"
            rows="10"
          ></textarea>
          <br />
          <button className="btn btn-primary" onClick={handleUpClick}>
            Convert to UpperCase
          </button>
          {/* diff buttons */}
          <button
            className="btn btn-primary mx-3"
            type="submit"
            onClick={handleLpClick}
          >
            Convert to LowerCase
          </button>
          <button
            className="btn btn-primary mx-1 my-1"
            type="submit"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>

        <div className="container my-2">
          <h1>Your text summary</h1>
          <p>
            {text.split(" ").length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(" ").length} minutes read</p>
          <h1>Preview</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
