import {
  faBackwardStep,
  faEllipsis,
  faForwardStep,
  faListUl,
  faPause,
  faPlay,
  faRepeat,
  faShuffle,
  faVolumeMute,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  addAudioElement,
  addSelectIndex,
  setStatePlay,
} from "../../actions/selectSong";
import songApi from "../../Api/songApi";
import ArtistName from "../../common/ArtistName/ArtistName";
import ButtonIcon from "../../common/ButtonIcon/ButtonIcon";
import "./NowPlaying.css";
import formatTimes from "../../common/fomatTimes";
import {
  addSelectSong,
  addSelectSrc,
  setIsPlaying,
  setVolume,
} from "../../actions/np_localStore";

function NowPlaying() {
  const audioRef = useRef();
  const audio = audioRef.current;
  const [currentTimeSong, setCurrentTimeSong] = useState(0);
  const [loop, setLoop] = useState(false);
  const [random, setRandom] = useState(false);

  const listSongs = useSelector((state) => state.selectSong.listSongs);
  const currentIndex = useSelector((state) => state.selectSong.index);
  const currentStatePlay = useSelector((state) => state.selectSong.statePlay);
  const srcSong = useSelector((state) => state.npLocalStore.src);
  const isPlaying = useSelector((state) => state.npLocalStore.isPlaying);
  const volume = useSelector((state) => state.npLocalStore.volume);
  const actionStatePlayTrue = setStatePlay(true);
  const actionStatePlayFalse = setStatePlay(false);
  const dispatch = useDispatch();

  //API cu
  useEffect(() => {
    const fetchChartSong = async () => {
      try {
        const responseSong = await songApi.getSong(
          listSongs[currentIndex].encodeId
        );
        dispatch(addSelectSrc(responseSong[128]));
        dispatch(addAudioElement(audio));
        dispatch(setIsPlaying(true));
      } catch (error) {
        console.log(error);
      }
    };
    listSongs[currentIndex] ? fetchChartSong() : console.log("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listSongs[currentIndex]]);

  //next song
  const nextSong = () => {
    let nextIndex;
    if (random) {
      const randomIdx = Math.floor(Math.random() * listSongs.length);
      nextIndex = randomIdx;
    } else {
      nextIndex = currentIndex + 1;
    }
    if (nextIndex >= listSongs.length) {
      nextIndex = 0;
    }
    dispatch(addSelectIndex(nextIndex));
    dispatch(addSelectSong(listSongs[nextIndex]));
    setCurrentTimeSong(0);
    audio.src = "";
  };
  //prev song
  const prevSong = () => {
    let prevIndex;
    if (random) {
      const randomIdx = Math.floor(Math.random() * listSongs.length);
      prevIndex = randomIdx;
    } else {
      prevIndex = currentIndex - 1;
    }
    if (prevIndex < 0) {
      prevIndex = listSongs.length - 1;
    }
    dispatch(addSelectIndex(prevIndex));
    dispatch(addSelectSong(listSongs[prevIndex]));

    setCurrentTimeSong(0);
    audio.src = "";
  };

  //handle VolumeChanged
  const handleVolumeChanged = (e) => {
    let volumeCurrent = e.target.value / 100;
    audio.volume = volumeCurrent;
    dispatch(setVolume(volumeCurrent * 100));
  };
  //time song Play
  const timePlay = () => {
    if (currentStatePlay) {
    }
    dispatch(actionStatePlayTrue);
    audio.ontimeupdate = () => {
      setCurrentTimeSong(Math.floor(audio.currentTime));
    };
  };
  const percentsSong =
    (currentTimeSong /
      (listSongs[currentIndex] ? listSongs[currentIndex].duration : 100)) *
    100;

  //handlePlaySong
  const handlePlaySong = () => {
    if (currentStatePlay) {
      audio.pause();
      dispatch(actionStatePlayFalse);
    } else {
      audio.play();
      dispatch(actionStatePlayTrue);
    }
  };
  // handle seek song
  const handleSeek = (e) => {
    let timeCurrent =
      (e.target.value / 100) *
      (listSongs[currentIndex] ? listSongs[currentIndex].duration : 100);
    audio.currentTime = timeCurrent;
  };
  //handle loop song
  const handleLoopSong = () => {
    setLoop((loop) => !loop);
  };

  //handle random song
  const handleSetRandomSong = () => {
    setRandom((random) => !random);
  };

  return (
    <div
      className={`now-playing-wrapper ${
        isPlaying ? "has-song-playing" : "hide"
      }`}
    >
      <div className="player-control">
        <div className="item player-control-container">
          <div className="item-left player-control-left">
            <div className="song-info">
              <div className="media">
                <div className="media-left">
                  <NavLink to="">
                    <div className="thumbnail-wrapper">
                      <div className="thumbnail">
                        <img
                          className="img-thumbnail"
                          src={
                            listSongs[currentIndex]
                              ? listSongs[currentIndex].thumbnail
                              : null
                          }
                          alt=""
                        />
                      </div>
                    </div>
                  </NavLink>
                </div>
                <div className="media-content">
                  <div className="song-info">
                    <div className="song-title item-left">
                      <NavLink to="">
                        <span className="title">
                          {listSongs[currentIndex]
                            ? listSongs[currentIndex].title
                            : null}
                        </span>
                      </NavLink>
                    </div>
                  </div>
                  <h3 className="song-artists">
                    <ArtistName
                      artists={
                        listSongs[currentIndex]
                          ? listSongs[currentIndex].artists
                          : []
                      }
                    />
                  </h3>
                </div>
                <div className="media-left mobile-hide">
                  <div className="item">
                    <ButtonIcon icon={faEllipsis} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item-center player-control-center">
            <div className="control-wrapper">
              <div
                className={`btn-control ${random ? "random-active" : ""}`}
                onClick={handleSetRandomSong}
              >
                <ButtonIcon icon={faShuffle}></ButtonIcon>
              </div>
              <div className="btn-control" onClick={prevSong}>
                <ButtonIcon icon={faBackwardStep}></ButtonIcon>
              </div>
              <div className="btn-control btn-toggle" onClick={handlePlaySong}>
                <ButtonIcon
                  icon={currentStatePlay ? faPause : faPlay}
                ></ButtonIcon>
              </div>
              <div className="btn-control" onClick={nextSong}>
                <ButtonIcon icon={faForwardStep}></ButtonIcon>
              </div>
              <div
                className={`btn-control ${loop ? "loop-active" : ""}`}
                onClick={handleLoopSong}
              >
                <ButtonIcon icon={faRepeat}></ButtonIcon>
              </div>
            </div>
            <div className="item ">
              <span className="time-current time">
                {listSongs[currentIndex] ? formatTimes(currentTimeSong) : 0}
              </span>
              <input
                id="process"
                onInput={handleSeek}
                className="process"
                value={percentsSong}
                style={{
                  background: `linear-gradient(to right, #fff 0%, 
                    #fff ${percentsSong + "%"}, 
                    rgba(255, 255, 255, 0.3) ${percentsSong + "%"}  , 
                    rgba(255, 255, 255, 0.3) 100%)`,
                }}
                type="range"
              />
              <span className="time-duration time">
                {listSongs[currentIndex]
                  ? formatTimes(listSongs[currentIndex].duration)
                  : "0"}
              </span>
            </div>
          </div>
          <div className="item-right player-control-right">
            <div className="item">
              <ButtonIcon icon={volume === 0 ? faVolumeMute : faVolumeUp} />
            </div>
            <input
              id="volume"
              onInput={handleVolumeChanged}
              className="volume"
              value={volume}
              style={{
                background: `linear-gradient(to right, #fff 0%, 
                    #fff ${volume + "%"}, 
                    rgba(255, 255, 255, 0.3) ${volume + "%"}  , 
                    rgba(255, 255, 255, 0.3) 100%)`,
              }}
              type="range"
              min="0"
              max="100"
            />
            <div className="div"></div>
            <div className="item list-playing">
              <ButtonIcon icon={faListUl} />
            </div>
          </div>
        </div>
        {/* <>
          <NPLyrics />
        </> */}
      </div>
      <audio
        onPlay={timePlay}
        onEnded={nextSong}
        loop={loop}
        ref={audioRef}
        autoPlay={Boolean(srcSong)}
        src={listSongs[currentIndex] ? srcSong : ""}
      ></audio>
    </div>
  );
}

export default NowPlaying;
