import React from "react";
import Header from "./components/header";
import Banner from "./components/banner";
import "./App.css";
import Section from "./components/sections";

function App() {
  return (
    <body>
      <Header/>
      <Banner/>
      <main>
        <Section/>
      </main>
    </body>
  );
}

export default App;
