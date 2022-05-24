import "./App.css";
import { useState } from "react";

function App() {
  const [textarea, setTextarea] = useState("This is my new text area to have");
  const handlechange = (e) => {
    setTextarea(e.target.value);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1> Todo App </h1>
        <form>
          <textarea value={textarea} onChange={handlechange} />
          <br />
          <input type="submit" value="Addtodo" className="button" />
        </form>
      </header>
    </div>
  );
}

export default App;
