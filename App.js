import React from "react";
import "./App.css";
import { useVoice } from "./useVoice";
import Trying from "./Trying";
import About from "./About";

const App = () => {
 
  const {  voiceSupported } = useVoice();
  if (!voiceSupported) {
    return (
      <div className="app">
        <h1>
          Voice recognition is not supported by your browser, please re-try with
          a supported browser e.g. Chrome , Edge etc ..
        </h1>
      </div>
    );
  } 
  return (
    <>
      <Trying/>
      <About/>
    </>
  );
};

export default App;