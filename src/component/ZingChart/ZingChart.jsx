import {
  faEllipsis,
  faHeart,
  faMicrophone,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as like } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import songAPI from "../../Api/songApi";
import ArtistName from "../../common/ArtistName/ArtistName";
import ButtonPlay from "../../common/BtnPlay/ButtonPlay";
import ButtonIcon from "../../common/ButtonIcon/ButtonIcon";
import "./ZingChart.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addSelectSong,
  addListSongs,
  addSelectIndex,
  setStatePlay,
} from "../../actions/selectSong";
import formatTimes from "../../common/fomatTimes";

function RenderListSongs(props) {
  const prevSong = useSelector((state) => state.selectSong.song);
  const currentStatePlay = useSelector((state) => state.selectSong.statePlay);
  const audioElement = useSelector((state) => state.selectSong.audio);
  const dispatch = useDispatch();

  const [liked, setLiked] = useState(false);
  const song = props.item;
  const index = props.index;
  //handle liked
  const handleLiked = () => {
    setLiked((liked) => !liked);
    console.log(Boolean(audioElement));
  };

  // handle play song
  const handlePlaySong = () => {
    const action = addSelectSong(song);
    const actions = addSelectIndex(index);
    dispatch(action);
    dispatch(actions);
    if (currentStatePlay && audioElement) {
      audioElement.pause();
      dispatch(setStatePlay(false));
    }
    if (currentStatePlay === false && audioElement) {
      audioElement.play();
      dispatch(setStatePlay(true));
    }
  };

  return (
    <div
      className={`chart-song-item ${
        song.encodeId === prevSong.encodeId ? "active" : ""
      }`}
      onDoubleClick={handlePlaySong}
    >
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
              <div className="opacity"></div>
              <img src={song.thumbnail} alt="" className="img-thumb" />
              <div onClick={handlePlaySong}>
                <ButtonPlay Id={song.encodeId} />
              </div>
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
          {props.fullList ? (
            <div className="media-content">
              <div className="album-info">
                <NavLink to="" className="link-album">
                  {song.album ? song.album.title : ""}
                </NavLink>
              </div>
            </div>
          ) : null}
          <div className="media-right">
            <div className="time-duration">
              <div className="item">
                <div className="duration">{formatTimes(song.duration)}</div>
              </div>
            </div>
            <div className="otp-hover">
              <div className="item">
                <ButtonIcon icon={faMicrophone} />
                {props.fullList ? (
                  <div onClick={handleLiked}>
                    <ButtonIcon icon={liked ? faHeart : like} />
                  </div>
                ) : null}
                <ButtonIcon icon={faEllipsis} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ZingChart() {
  const [showList, setShowList] = useState(false);
  const [chartWeek, setChartWeek] = useState();
  console.log("render");
  const dispatch = useDispatch();

  const ListSongs = useSelector((state) => state.selectSong.listSongs);

  //API
  useEffect(() => {
    const fetchChartSong = async () => {
      try {
        const responseChartSong = await songAPI.getChartHome();
        const listSongs = responseChartSong.data.RTChart.items;
        const listChartWeek = responseChartSong.data.weekChart;
        const action = addListSongs(listSongs);
        dispatch(action);
        setChartWeek(listChartWeek);
      } catch (error) {
        console.log(error);
      }
    };
    fetchChartSong();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              {ListSongs.map((item, index) => (
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
