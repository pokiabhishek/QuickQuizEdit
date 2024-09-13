// src/App.js

import React from "react";

import AddQuestion from "./Component/AddQuestion/AddQuestion";
import OutputQuestion from "./Component/OutputQuestion/OutputQuestion";
import "./App.css";
const App = () => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          position: "absolute",
          zIndex: "1",
          left: "40%",
          top: "20px",
          color: "white",
          letterSpacing: "1px",
        }}
      >
        User Quiz Application
      </h1>
      <div className="App">
        <img
          src="https://media.giphy.com/media/FKwdwwUkppqhO/giphy.gif"
          alt="Giphy GIF"
          className="video"
        />

        <AddQuestion />
        <OutputQuestion />
      </div>
    </>
  );
};

export default App;
