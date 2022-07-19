import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo, useEffect, useState } from "react";
import songAPI from "../../Api/songApi";
import "./ZingChart.css";
import { useDispatch, useSelector } from "react-redux";
import { addQueueListSongs, addZingChart } from "../../actions/selectSong";
import { setIsLoading } from "../../actions/isLoading";

import RenderListSongs from "./renderListSongs/renderListSongs";
import RenderListSkeleton from "./renderListSongs/renderListSkeleton";

function ZingChart() {
  const [showList, setShowList] = useState(false);
  const dispatch = useDispatch();

  const chartSongs = useSelector((state) => state.selectSong.zingChart);
  const isLoading = useSelector((state) => state.isLoading.loading);
  const ListSongs = chartSongs?.RTChart ? chartSongs.RTChart.items : [];
  //API
  useEffect(() => {
    const fetchChartSong = async () => {
      try {
        const responseChartSong = await songAPI.getChartHome();
        const dataChartSongs = responseChartSong;
        dispatch(addZingChart(dataChartSongs));
        dispatch(addQueueListSongs(dataChartSongs.RTChart.items));
        dispatch(setIsLoading(true));
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
                <h3 className="title">Top 100 bài hát nhạc trẻ hay nhất</h3>
                <button className="btn btn-chart-play">
                  <FontAwesomeIcon className="chart-icon-play" icon={faPlay} />
                </button>
              </div>
            </div>
            <div
              className={`chart-list-container ${showList ? "show-all" : ""}`}
            >
              {isLoading ? (
                ListSongs.map((item, index) => (
                  <RenderListSongs
                    key={index}
                    index={index}
                    fullList={true}
                    item={item}
                  ></RenderListSongs>
                ))
              ) : (
                <RenderListSkeleton items={10} />
              )}
            </div>
            <div
              className={`show-list ${showList ? "hide" : ""}`}
              onClick={handleShowTop100}
            >
              <button className="btn btn-show-list">More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ZingChart);
