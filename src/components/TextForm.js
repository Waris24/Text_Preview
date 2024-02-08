import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper Case succes", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLpClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower Case", "success");
  };

  const handleClear = () => {
    let newText = "";
    setText(newText);
  };

  const [text, setText] = useState("");

  return (
    <div
      className="container my-3"
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Enter text here.................."
          onChange={handleOnChange}
          // value={text}
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
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
  );
}
