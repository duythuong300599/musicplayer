import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import songAPI from "../../Api/songApi";
import ArtistName from "../../common/ArtistName/ArtistName";
import "./ZingChart.css";

function RenderListSongs(props) {
  const song = props.item;
  function formatTimes(times) {
    // Hours, minutes and seconds
    var hrs = ~~(times / 3600);
    var mins = ~~((times % 3600) / 60);
    var secs = ~~times % 60;
    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";
    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    if (mins > 0 && mins < 10) {
      ret += "0" + mins + ":" + (secs < 10 ? "0" : "");
    } else {
      ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    }
    ret += "" + secs;
    return ret;
  }

  return (
    <div className="chart-song-item">
      <div className="list-item bor-b-1">
        <div className="media">
          <div className="media-left">
            <div className="song-id mar-r-15">
              <span
                className={`number ${
                  props.index === 0
                    ? "is-top-1"
                    : props.index === 1
                    ? "is-top-2"
                    : props.index === 2
                    ? "is-top-3"
                    : ""
                }`}
              >
                {props.index + 1}
              </span>
            </div>
            <div className="song-thumb">
              <img src={song.thumbnail} alt="" className="img-thumb" />
            </div>
            <div className="card-info">
              <div className="title-wrapper">
                <span className="title">{song.title}</span>
              </div>
              <h3 className="subtitle">
                <ArtistName artists={song.artists}></ArtistName>
              </h3>
            </div>
          </div>
          <div className="media-content">
            <div className="album-info">
              <NavLink to="" className="link-album">
                {song.album ? song.album.title : ""}
              </NavLink>
            </div>
          </div>
          <div className="media-right">
            <div className="item">
              <div className="duration">{formatTimes(song.duration)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ZingChart() {
  const [showList, setShowList] = useState(false);
  const [chartSongs, setChartSongs] = useState([]);

  //API
  useEffect(() => {
    const fetchChartSong = async () => {
      try {
        const responseChartSong = await songAPI.getChartHome();
        const listSongs = responseChartSong.data.RTChart.items;
        console.log(listSongs);
        setChartSongs(listSongs);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChartSong();
  }, []);

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
              {chartSongs.map((item, index) => (
                <RenderListSongs
                  key={index}
                  index={index}
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
              <NavLink className="week-chart-title" to="/">
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
                  <div className="box-list"></div>
                  <div className="show-list">
                    <button className="btn btn-show-list">Xem Tất Cả</button>
                  </div>
                </div>
              </div>
              <div className="column-item">
                <div className="week-chart-box">
                  <div className="box-header">
                    <NavLink to="" className="box-header-title">
                      US-UK
                    </NavLink>
                    <button className="btn btn-chart-play">
                      <FontAwesomeIcon
                        className="chart-icon-play"
                        icon={faPlay}
                      />
                    </button>
                  </div>
                  <div className="box-list"></div>
                  <div className="show-list">
                    <button className="btn btn-show-list">Xem Tất Cả</button>
                  </div>
                </div>
              </div>
              <div className="column-item">
                <div className="week-chart-box">
                  <div className="box-header">
                    <NavLink to="" className="box-header-title">
                      K-POP
                    </NavLink>
                    <button className="btn btn-chart-play">
                      <FontAwesomeIcon
                        className="chart-icon-play"
                        icon={faPlay}
                      />
                    </button>
                  </div>
                  <div className="box-list"></div>
                  <div className="show-list">
                    <button className="btn btn-show-list">Xem Tất Cả</button>
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

export default ZingChart;
