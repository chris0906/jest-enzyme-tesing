import React from "react";
import Header from "./components/header";
import Headline from "./components/headline";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Headline header="Posts" desc="Click the button to render the posts!" />
      </div>
    </div>
  );
}

export default App;
