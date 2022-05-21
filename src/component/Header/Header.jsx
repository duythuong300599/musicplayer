import {
  faAngleRight,
  faArrowTrendUp,
  faArrowUpFromBracket,
  faBan,
  faCircleInfo,
  faCirclePlay,
  faFileLines,
  faFlag,
  faGear,
  faGem,
  faMagnifyingGlass,
  faPhone,
  faRectangleAd,
  faShield,
  faShirt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ButtonIcon from "../../common/Icon/ButtonIcon";
import "./Header.css";

function Header() {
  const [listSearch, setListSearch] = useState(false);
  const [showSetting, setShowSetting] = useState(false);

  //handle show list search
  const handleShowListSearch = () => {
    setListSearch(true);
  };
  //handle hide list search
  const handleHideListSearch = () => {
    setListSearch(false);
  };
  //handle show Setting
  const handleShowSetting = () => {
    setShowSetting((showSetting) => !showSetting);
  };

  return (
    <header className="header">
      <div className="item">
        <div className="item-left">
          <form className="search">
            <div
              className={`search-container ${listSearch ? "is-focussed" : ""}`}
            >
              <div className="btn btn-search">
                <FontAwesomeIcon
                  className="search-icon"
                  icon={faMagnifyingGlass}
                />
              </div>
              <div
                className="input-wrapper"
                onFocus={handleShowListSearch}
                onBlur={handleHideListSearch}
              >
                <input
                  type="text"
                  placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV…"
                />
              </div>
            </div>
            <ul className={`list-search ${listSearch ? "show" : "hide"}`}>
              <div className="list-search-container">
                <div className="search-title">Đề xuất cho bạn</div>
                <div>
                  <li className="search-item">
                    <FontAwesomeIcon
                      className="icon-search"
                      icon={faArrowTrendUp}
                    />
                    <span className="search-text">Đám cưới nha?</span>
                  </li>
                </div>
                <div>
                  <li className="search-item">
                    <FontAwesomeIcon
                      className="icon-search"
                      icon={faArrowTrendUp}
                    />
                    <span className="search-text">Có em là</span>
                  </li>
                </div>
                <NavLink to="/">
                  <li className="search-item">
                    <FontAwesomeIcon
                      className="icon-search"
                      icon={faArrowTrendUp}
                    />
                    <span className="search-text link-text">radio</span>
                  </li>
                </NavLink>
                <NavLink to="/">
                  <li className="search-item">
                    <FontAwesomeIcon
                      className="icon-search"
                      icon={faArrowTrendUp}
                    />
                    <span className="search-text link-text">karaoke</span>
                  </li>
                </NavLink>
                <NavLink to="/">
                  <li className="search-item">
                    <FontAwesomeIcon
                      className="icon-search"
                      icon={faArrowTrendUp}
                    />
                    <span className="search-text link-text">podcast</span>
                  </li>
                </NavLink>
              </div>
            </ul>
          </form>
        </div>
        <div className="item-right">
          <div className="item-setting">
            <ButtonIcon icon={faShirt} />
          </div>
          <div className="item-setting">
            <ButtonIcon icon={faGem} />
          </div>
          <div className="item-setting">
            <ButtonIcon icon={faArrowUpFromBracket} />
          </div>
          <div className="item-setting" onClick={handleShowSetting}>
            <div>
              <ButtonIcon icon={faGear} />
            </div>
            <div
              onClick={(e) => e.stopPropagation()}
              className={`menu-setting ${showSetting ? "show" : "hide"}`}
            >
              <ul className="menu-list">
                <li className="menu-item">
                  <span>
                    <NavLink to="/mymusic/blocked" className="link-setting">
                      <button className="btn btn-setting">
                        <FontAwesomeIcon
                          className="icon-setting"
                          icon={faBan}
                        />
                        <span>Danh sách chặn</span>
                      </button>
                    </NavLink>
                  </span>
                </li>
                <li className="menu-item">
                  <button className="btn btn-setting item">
                    <div className="content-setting-wrapper">
                      <FontAwesomeIcon className="icon-setting" icon={faBan} />
                      <span>Chất lượng nhạc</span>
                    </div>
                    <FontAwesomeIcon className="" icon={faAngleRight} />
                  </button>
                </li>
                <li className="menu-item">
                  <button className="btn btn-setting item">
                    <div className="content-setting-wrapper">
                      <FontAwesomeIcon
                        className="icon-setting"
                        icon={faCirclePlay}
                      />
                      <span>Giao diện</span>
                    </div>
                    <FontAwesomeIcon className="" icon={faAngleRight} />
                  </button>
                </li>
              </ul>
              <footer className="footer">
                <ul className="footer-list">
                  <li className="footer-item">
                    <button className="btn btn-setting">
                      <FontAwesomeIcon
                        className="icon-setting"
                        icon={faCircleInfo}
                      />
                      <span>Giới thiệu</span>
                    </button>
                  </li>
                  <li className="footer-item">
                    <NavLink to="/" className="link-setting">
                      <button className="btn btn-setting">
                        <FontAwesomeIcon
                          className="icon-setting"
                          icon={faFlag}
                        />
                        <span>Góp ý</span>
                      </button>
                    </NavLink>
                  </li>
                  <li className="footer-item">
                    <NavLink to="/" className="link-setting">
                      <button className="btn btn-setting">
                        <FontAwesomeIcon
                          className="icon-setting"
                          icon={faPhone}
                        />
                        <span>Liên hệ</span>
                      </button>
                    </NavLink>
                  </li>
                  <li className="footer-item">
                    <NavLink to="/" className="link-setting">
                      <button className="btn btn-setting">
                        <FontAwesomeIcon
                          className="icon-setting"
                          icon={faRectangleAd}
                        />
                        <span>Quảng Cáo</span>
                      </button>
                    </NavLink>
                  </li>
                  <li className="footer-item">
                    <NavLink to="/" className="link-setting">
                      <button className="btn btn-setting">
                        <FontAwesomeIcon
                          className="icon-setting"
                          icon={faFileLines}
                        />
                        <span>Thoả thuận sử dụng</span>
                      </button>
                    </NavLink>
                  </li>
                  <li className="footer-item">
                    <NavLink to="/" className="link-setting">
                      <button className="btn btn-setting">
                        <FontAwesomeIcon
                          className="icon-setting"
                          icon={faShield}
                        />
                        <span>Chính sách bảo mật</span>
                      </button>
                    </NavLink>
                  </li>
                </ul>
              </footer>
            </div>
          </div>
          <div className="avatar-container">
            <button className="btn btn-avatar">
              <div className="avatar-wrapper">
                <img src="https://avatar.talk.zdn.vn/default" alt="" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
