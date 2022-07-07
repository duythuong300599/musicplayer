import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import songApi from "../../../Api/songApi";
import ButtonIcon from "../../../common/ButtonIcon/ButtonIcon";

import "./NPLyrics.css";

function NPLyrics() {
  const song = useSelector((state) => state.selectSong.song);
  const [lyrics, setLyrics] = useState();
  const img = song.thumbnailM;

  useEffect(() => {
    const fetchDetailSong = async () => {
      try {
        const responseDetails = await songApi.getLyrics(song.encodeId);
        let Lyr = [];
        const data = responseDetails.data.sentences;
        data.map((item) => {
          let lineLyr = "";
          let sTime = 0;
          let eTime = 0;
          item.words.map((element, index) => {
            if (index === 0) {
              sTime = element.startTime;
            }
            if (index === item.words.length - 1) {
              eTime = element.endTime;
            }
            lineLyr += element.data + " ";
            return { sTime, eTime, lineLyr };
          });
          Lyr.push({
            startTime: sTime,
            endTime: eTime,
            data: lineLyr,
          });
          return Lyr;
        });
        setLyrics(Lyr);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetailSong();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [song.encodeId]);
  return (
    <div className="song-lyrics">
      <div className="bg-img">
        <div
          className="background"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="opacity"></div>
      </div>
      <div className="lyrics-wrapper">
        <div className="lyrics-thumbnail item-left">
          <img src={song.thumbnailM} alt="" />
        </div>
        <div className="lyrics-content">
          <ul className="lyrics-title">
            {lyrics?.map((item, index) => (
              <li className="lyrics-line" key={index}>
                {item.data}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="btn-close-lyrics item-right">
        <ButtonIcon icon={faCaretDown} />
      </div>
    </div>
  );
}

export default NPLyrics;
