import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"


function App() {
  return (
    <div className="App">
      <Header />
      <Tasks />
    </div>
  );
}

export default App;
