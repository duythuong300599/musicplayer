import {
  faEllipsis,
  faHeart,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as like } from "@fortawesome/free-regular-svg-icons";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  addSelectIndex,
  addSelectSong,
  setStatePlay,
} from "../../../actions/selectSong";
import ArtistName from "../../../common/ArtistName/ArtistName";
import ButtonPlay from "../../../common/BtnPlay/ButtonPlay";
import ButtonIcon from "../../../common/ButtonIcon/ButtonIcon";
import formatTimes from "../../../common/fomatTimes";

import "./renderListSongs.css";

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

export default RenderListSongs;
