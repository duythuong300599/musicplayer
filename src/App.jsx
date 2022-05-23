import React from "react";
import Navbar from "./component/Navbar/Navbar";
import "./App.css";
import Header from "./component/Header/Header";
import Router from "./router";
import NowPlaying from "./component/NowPlaying/NowPlaying";

function App() {
  return (
    <div className="layout-container">
      <Navbar />
      <Header />
      <div className="main-page">
        <Router />
      </div>
      <NowPlaying />
    </div>
  );
}

export default App;
