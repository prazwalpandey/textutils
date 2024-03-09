import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Textform(props) {
  const handleOnChange = (event) => {
    console.log("Handle on Change.");
    updateText(event.target.value);
  };

  const handleUpClick = () => {
    console.log("Uppercase Button was Clicked.");
    updateText(text.toUpperCase());
  };

  const handleLoClick = () => {
    console.log("lowercase button was clicked.");
    updateText(text.toLocaleLowerCase());
  };

  const handleClClick = () => {
    console.log("Clear Text button was clicked.");
    updateText("");
  };
  const handleTwClick = (text) => {
    console.log("Trim WhiteSpaces was clicked.");
    const trimmedText = text.replace(/\s+/g, " ").trim();
    updateText(trimmedText);
  };
  const countWords = (text) => {
    // Remove consecutive spaces and trim leading/trailing whitespace
    const trimmedText = text.replace(/\s+/g, " ").trim();

    if (trimmedText === "") {
      return 0; // return 0 if the input string is empty or contains only whitespace
    }

    // Split the text by word boundaries using regular expression
    const wordsArray = trimmedText.match(/\b\w+\b/g);

    // Count the number of words in the array
    return wordsArray ? wordsArray.length : 0;
  };

  const generateLoremIpsum = () => {
    console.log("Lorem Ipsum");
    fetch("https://baconipsum.com/api/?type=meat-and-filler")
      .then((response) => response.json())
      .then((newText) => updateText(text + newText))
      .catch((error) => console.error("Error fetching Lorem Ipsum:", error));
  };

  const copyToClipboard = (text) => {
    if (!navigator.clipboard || !navigator.clipboard.writeText) {
      console.error("Clipboard API not supported");
      return;
    }
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((error) => {
        console.error("Error copying text to clipboard: ", error);
      });
  };

  const copyFromClipboard = () => {
    if (!navigator.clipboard || !navigator.clipboard.readText) {
      console.error("Clipboard API not supported");
      return;
    }
    navigator.clipboard
      .readText()
      .then((pastedText) => {
        updateText(text + pastedText);
        console.log("Text pasted from clipboard: ", text);
      })
      .catch((error) => {
        console.error("Error pasting text from clipboard: ", error);
      });
  };

  const [text, updateText] = useState("Hello World!");

  return (
    <>
      <div className="flex flex-col text-center justify-center">
        <h2 className="mt-3 font-weight-normal">{props.title.toUpperCase()}</h2>
        <p className="text-muted text-monospace font-weight-lighter mb-3">
          {props.warning}
        </p>
        <textarea
          className="form-control mb-1"
          id="textBox"
          value={text}
          onChange={handleOnChange}
          rows="10"
        />
        <div className="flex text-monospace mb-1 w-full justify-evenly">
          <span className="mx-2">Characters : {text.length}</span>
          <span>|</span>
          <span className="mx-2">Words : {countWords(text)}</span>
          <span>|</span>
          <span className="mx-2">Read(mins): {0.08 * countWords(text)}</span>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-dark m-1"
            onClick={copyFromClipboard}
          >
            Paste
          </button>

          <button
            type="button"
            className="btn btn-dark m-1"
            onClick={handleClClick}
          >
            Clear Text
          </button>

          <button
            type="button"
            className="btn btn-dark m-1"
            onClick={() => copyToClipboard(text)}
          >
            Copy
          </button>
        </div>
        <div className="container flex flex-row my-1">
          <button className="btn btn-primary m-1" onClick={handleUpClick}>
            UPPERCASE
          </button>
          <button className="btn btn-primary m-1" onClick={handleLoClick}>
            lowercase
          </button>
          <button className="btn btn-primary m-1" onClick={generateLoremIpsum}>
            Random
          </button>
          <button className="btn btn-primary m-1" onClick={()=>handleTwClick(text)}>
            Trim Whitespaces
          </button>
        </div>
      </div>
    </>
  );
}

Textform.prototype = {
  title: PropTypes.string,
  warning: PropTypes.string,
};

Textform.defaultProps = {
  title: "Enter the title of box",
  warning: "Enter the warning",
};
