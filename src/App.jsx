import React from "react";
import Navbar from "./component/Navbar/Navbar";
import "./App.css";
import Router from "./router";
import NowPlaying from "./component/NowPlaying/NowPlaying";
import { SkeletonTheme } from "react-loading-skeleton";
import { useSelector } from "react-redux";

function App() {
  const isPlaying = useSelector((state) => state.npLocalStore.isPlaying);

  const backgroundColor = {
    primary: "#170f23",
    green: "green",
  };
  return (
    <SkeletonTheme
      baseColor="rgba(255, 255, 255, 0.05)"
      highlightColor="#525252"
    >
      <div
        className="layout-container"
        style={{ backgroundColor: `${backgroundColor.primary}` }}
      >
        <Navbar />
        <div className={`${isPlaying ? "song-playing" : ""} main-page`}>
          <Router />
        </div>
        <NowPlaying />
      </div>
    </SkeletonTheme>
  );
}

export default App;
