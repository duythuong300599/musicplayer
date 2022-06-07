import React from "react";
import Navbar from "./component/Navbar/Navbar";
import "./App.css";
import Header from "./component/Header/Header";
import Router from "./router";
import NowPlaying from "./component/NowPlaying/NowPlaying";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <div className="layout-container">
        <Navbar />
        <Header />
        <div className="main-page">
          <Router />
        </div>
        <NowPlaying />
      </div>
    </SkeletonTheme>
  );
}

export default App;
