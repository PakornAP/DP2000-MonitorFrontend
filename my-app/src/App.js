import "./App.css";
import { Frame } from "./components/frame";
import React, { useState, useEffect } from "react";
function App() {
  // const [result, setresult] = useState({});
  const [filepath, setFilepath] = useState("/static/dome.jpg");
  // const filepath = "/static/dome.jpg";
  return (
    <div className="App">
      <Frame filepath={filepath} />
    </div>
  );
}

export default App;
