import React from "react";
import Header from "./components/header";
import Headline from "./components/headline";
import "./app.scss";

const tempArr = [
  {
    fName: "Joe",
    lName: "Bloggs",
    email: "joebloggs@gmail.com",
    age: 24,
    onlineStatus: true
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Headline
          tempArr={tempArr}
          header="Posts"
          desc="Click the button to render the posts!"
        />
      </div>
    </div>
  );
}

export default App;
