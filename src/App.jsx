import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import Page404 from "./component/Page404/Page404";
import ZingChart from "./component/ZingChart/ZingChart";
import "./App.css";
import Header from "./component/Header/Header";

function App() {
  return (
    <div className="layout-container">
      <Navbar />
      <Header />
      <div className="main-page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/zing-chart" element={<ZingChart />} />
          <Route element={<Page404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
