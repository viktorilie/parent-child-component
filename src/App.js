import "./App.css";
import { useState } from "react";
import ChildComp from "./ChildComp";

function App() {
  const [UIcolor, setUIcolor] = useState(null);

  const getColor = (color) => {
    setUIcolor(color);
  };

  return (
    <div className="App">
      <div
        className="app-color-container"
        style={{ background: `${UIcolor}` }}></div>
      <ChildComp getColor={getColor} />
    </div>
  );
}

export default App;
