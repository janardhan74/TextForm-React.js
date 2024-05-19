import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter the text"); // it is called HOOK // it is always declared inside the function bove the return
  // we cant change the vaue of text by assignment
  // text ="hi how are yopu" //-> see by uncommenting

  // we can change the value of text by setText()
  // setText("hi how are you");

  const handleUpClick = () => {
    // console.log("covert to uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
    // document.title = "TextUtils - UpperCase"; // to change the document title
  };

  const handleLoClick = () => {
    // console.log("covert to Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercse", "success");
    // document.title = "TextUtils - LowerCase"; // to change the document title
  };

  const handleClearClick = () => {
    // console.log("clear text was clicked");
    setText("");
    props.showAlert("Text Cleared", "success");
  };

  const handleExtraSpaces = () => {
    setText(text.split(/[ ]+/).join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };

  const handleCopy = () => {
    let text = document.querySelector(".form-control").value;
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied to Clipboard", "success");
  };

  const handleChange = (event) => {
    // console.log("change happen");
    // even we try to change the input it does not change
    setText(event.target.value); // by this we can change the value
  };

  console.log(props.mode)


  document.body.style.backgroundColor = props.mode.textform.backgroundColor;
  console.log(props.mode.textform)
  return (
    <div
      className="container my-3"
      style={props.mode.textform}
    >
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            {props.title}
          </label>
          <textarea
            style={props.mode.contents}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={text}
            onChange={handleChange}
            rows="10"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          convert to uppercase
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
        >
          convert to Lowercase
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>

        <button
          disabled={text.length === 0}
          type="button"
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy to ClipBoard
        </button>

        <div className="container">
          <h2>Your text summary</h2>
          <h4>
            words : {text.split(/[\s\n]/).filter((element)=>{return element.length !== 0}).length} <br /> characters : {text.length}
          </h4>
        </div>
      </form>
    </div>
  );
}
