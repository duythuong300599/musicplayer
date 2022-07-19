import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import "./ButtonPlay.css";

function ButtonPlay(props) {
  const prevSong = useSelector((state) => state.npLocalStore.song);
  const statePlay = useSelector((state) => state.selectSong.statePlay);
  return (
    <div className="btn-container">
      <button className="btn btn-play">
        {statePlay && props.Id === prevSong.encodeId ? (
          <img
            className="icon-play"
            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/icon-playing.gif"
            alt=""
          />
        ) : (
          <FontAwesomeIcon className="icon-play" icon={faPlay} />
        )}
      </button>
    </div>
  );
}

export default ButtonPlay;
