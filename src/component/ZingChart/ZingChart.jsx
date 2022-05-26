import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import songAPI from "../../Api/songApi";
import "./ZingChart.css";
import { useDispatch, useSelector } from "react-redux";
import { addListSongs } from "../../actions/selectSong";
import { setIsLoading } from "../../actions/isLoading";

import RenderListSongs from "./renderListSongs/renderListSongs";

function ZingChart() {
  const [showList, setShowList] = useState(false);
  console.log("render");
  const dispatch = useDispatch();

  const chartSongs = useSelector((state) => state.selectSong.listSongs);
  const isLoading = useSelector((state) => state.isLoading.loading);
  const ListSongs = chartSongs?.RTChart ? chartSongs.RTChart.items : [];
  const chartWeek = chartSongs?.weekChart ? chartSongs.weekChart : null;
  //API
  useEffect(() => {
    const fetchChartSong = async () => {
      try {
        const responseChartSong = await songAPI.getChartHome();
        const dataChartSongs = responseChartSong.data;
        dispatch(addListSongs(dataChartSongs));
        dispatch(setIsLoading(true));
        console.log("func called");
      } catch (error) {
        console.log(error);
      }
    };
    isLoading ? console.log("func don't called") : fetchChartSong();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("is Loading...", isLoading);

  //handle show top 100
  const handleShowTop100 = () => {
    setShowList(true);
  };

  return (
    <div className="page-chart">
      <div className="page-wrapper">
        <div className="container">
          <div className="container chart-wrapper">
            <div className="chart-header">
              <div className="chart-title">
                <h3 className="title">#zingchart</h3>
                <button className="btn btn-chart-play">
                  <FontAwesomeIcon className="chart-icon-play" icon={faPlay} />
                </button>
              </div>
            </div>
            <div
              className={`chart-list-container ${showList ? "show-all" : ""}`}
            >
              {(isLoading ? ListSongs : []).map((item, index) => (
                <RenderListSongs
                  key={index}
                  index={index}
                  fullList={true}
                  item={item}
                ></RenderListSongs>
              ))}
            </div>
            <div
              className={`show-list ${showList ? "hide" : ""}`}
              onClick={handleShowTop100}
            >
              <button className="btn btn-show-list">Xem Top 100</button>
            </div>
          </div>
          <div className="container week-chart">
            <div className="week-chart-header">
              <NavLink
                className="week-chart-title"
                to={chartWeek ? chartWeek.vn.link : ""}
              >
                Bảng Xếp Hạng Tuần
              </NavLink>
            </div>
            <div className="week-chart-column">
              <div className="column-item">
                <div className="week-chart-box">
                  <div className="box-header">
                    <NavLink to="" className="box-header-title">
                      Việt Nam
                    </NavLink>
                    <button className="btn btn-chart-play">
                      <FontAwesomeIcon
                        className="chart-icon-play"
                        icon={faPlay}
                      />
                    </button>
                  </div>
                  <div className="box-list">
                    {chartWeek
                      ? chartWeek.vn.items.map((item, index) => (
                          <RenderListSongs
                            key={index}
                            index={index}
                            item={item}
                            fullList={false}
                          ></RenderListSongs>
                        ))
                      : null}
                  </div>
                  <div className="show-list">
                    <NavLink
                      className="week-chart-link"
                      to={chartWeek ? chartWeek.vn.link : ""}
                    >
                      <button className="btn btn-show-list">Xem Tất Cả</button>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="column-item">
                <div className="week-chart-box">
                  <div className="box-header">
                    <NavLink
                      to={chartWeek ? chartWeek.us.link : ""}
                      className="box-header-title"
                    >
                      US-UK
                    </NavLink>
                    <button className="btn btn-chart-play">
                      <FontAwesomeIcon
                        className="chart-icon-play"
                        icon={faPlay}
                      />
                    </button>
                  </div>
                  <div className="box-list mar-b-15">
                    {chartWeek
                      ? chartWeek.us.items.map((item, index) => (
                          <RenderListSongs
                            key={index}
                            index={index}
                            item={item}
                            fullList={false}
                          ></RenderListSongs>
                        ))
                      : null}
                  </div>
                  <div className="show-list">
                    <NavLink
                      className="week-chart-link"
                      to={chartWeek ? chartWeek.us.link : ""}
                    >
                      <button className="btn btn-show-list">Xem Tất Cả</button>
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="column-item">
                <div className="week-chart-box">
                  <div className="box-header">
                    <NavLink
                      to={chartWeek ? chartWeek.korea.link : ""}
                      className="box-header-title"
                    >
                      K-POP
                    </NavLink>
                    <button className="btn btn-chart-play">
                      <FontAwesomeIcon
                        className="chart-icon-play"
                        icon={faPlay}
                      />
                    </button>
                  </div>
                  <div className="box-list">
                    {chartWeek
                      ? chartWeek.korea.items.map((item, index) => (
                          <RenderListSongs
                            key={index}
                            index={index}
                            item={item}
                            fullList={false}
                          ></RenderListSongs>
                        ))
                      : null}
                  </div>
                  <div className="show-list">
                    <NavLink
                      className="week-chart-link"
                      to={chartWeek ? chartWeek.korea.link : ""}
                    >
                      <button className="btn btn-show-list">Xem Tất Cả</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ZingChart);
