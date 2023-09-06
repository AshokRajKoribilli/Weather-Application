import React from "react";
import ReactDOM from "react-dom";
import WeatherApp from "./Components/WeatherApp/WeatherApp";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <WeatherApp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
