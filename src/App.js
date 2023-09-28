import React from "react";
import Header from "./components/header";
import Banner from "./components/banner";
import "./App.css";
import Section from "./components/sections";
import Footer from "./components/footer";

function App() {
  return (
    <html>
      <body>
        <Header/>
        <Banner/>
        <main>
          <Section/>
        </main>
        <Footer/>
    </body>
    </html>
   
  );
}

export default App;
