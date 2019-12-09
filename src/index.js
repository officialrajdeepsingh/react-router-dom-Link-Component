import React from "react";
import ReactDOM from "react-dom";
import Header from "./component/Header";
import Main from "./component/Main";


function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
