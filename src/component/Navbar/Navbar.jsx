import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  faChartLine,
  faCompactDisc,
  faFilm,
  faMusic,
  faRadio,
  faRectangleList,
  faSquareRss,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-wrapper">
        <nav className="navbar">
          <div className="navbar-logo">
            <div className="navbar-item">
              <button className="btn btn-logo">
                <NavLink to="/">
                  <div className="logo"></div>
                </NavLink>
              </button>
            </div>
          </div>
        </nav>
        <nav className="navbar navbar-main">
          <ul className="navbar-menu">
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/zzz ">
                <FontAwesomeIcon className="nav-icon" icon={faUser} />
                <span>Cá Nhân</span>
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                <FontAwesomeIcon className="nav-icon" icon={faCompactDisc} />
                <span>Khám phá</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/zing-chart">
                <FontAwesomeIcon className="nav-icon" icon={faChartLine} />
                <span>#zingchart</span>
              </NavLink>
            </li>

            <li className="nav-item ">
              <NavLink className="nav-link cursor-disabled" to="">
                <FontAwesomeIcon className="nav-icon" icon={faRadio} />
                <span>Radio</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link cursor-disabled" to="">
                <FontAwesomeIcon className="nav-icon" icon={faSquareRss} />
                <span>Theo dõi</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="nav-divide"></div>
        <div className="navbar navbar-main mar-t-10" style={{ height: "100%" }}>
          <ul className="navbar-menu">
            <li className="nav-item">
              <NavLink className="nav-link cursor-disabled" to="/">
                <FontAwesomeIcon className="nav-icon" icon={faMusic} />
                <span>Nhạc Mới</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link cursor-disabled" to="/">
                <FontAwesomeIcon className="nav-icon" icon={faRectangleList} />
                <span>Thể Loại</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/top100">
                <FontAwesomeIcon className="nav-icon" icon={faStar} />
                <span>Top 100</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link cursor-disabled" to="/">
                <FontAwesomeIcon className="nav-icon" icon={faFilm} />
                <span>MV</span>
              </NavLink>
            </li>
          </ul>
          <div className="login-container mar-t-15">
            <div className="text">
              Đăng nhập để khám phá playlist dành riêng cho bạn
            </div>
            <button className="btn btn-login cursor-disabled">
              <span>ĐĂNG NHẬP</span>
            </button>
          </div>
          <div className="vip-banner">
            <div className="text">
              Nghe nhạc không quảng cáo cùng kho nhạc VIP
            </div>
            <button className="btn btn-update-vip cursor-disabled">
              <span>Nâng cấp VIP</span>
            </button>
          </div>
        </div>
        {/* <div className="add-play-list">
          <button className="btn btn-add-play-list">
            <FontAwesomeIcon className="add-play-list-icon" icon={faPlus} />
            <span>Tạo Play List Mới</span>
          </button>
        </div> */}
      </div>
    </aside>
  );
}

export default Navbar;
