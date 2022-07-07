import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQueueListSongs } from "../../actions/selectSong";
import songApi from "../../Api/songApi";
import ArtistName from "../../common/ArtistName/ArtistName";
import formatDate from "../../common/formatDate";
import RenderListSkeleton from "../ZingChart/renderListSongs/renderListSkeleton";
import RenderListSongs from "../ZingChart/renderListSongs/renderListSongs";
import "./PlaylistDetail.css";

function PlaylistDetail() {
  const album = JSON.parse(localStorage.getItem("Album"));
  const [showList, setShowList] = useState(false);
  const [dataAlbum, setDataAlbum] = useState();
  const idAlbum =
    useSelector((state) => state.selectAlbum.Id) || album.encodeId;
  const dispatch = useDispatch();
  console.log(dataAlbum);
  useEffect(() => {
    try {
      const fetchAlbumApi = async () => {
        const responseAlbum = await songApi.getAlbumDetails(idAlbum);
        setDataAlbum(responseAlbum.data);
        dispatch(addQueueListSongs(responseAlbum.data.song.items));
      };
      fetchAlbumApi();
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idAlbum]);
  //handle show top 100
  const handleShowTop100 = () => {
    setShowList(true);
  };

  const timeUpdate = formatDate(dataAlbum?.contentLastUpdate);

  return (
    <div className="page-chart">
      <div className="page-wrapper">
        <div className="container">
          <div className="container chart-wrapper">
            <div className="chart-header">
              <div className="header-album">
                <div className="album-img">
                  <img src={dataAlbum?.thumbnailM} alt="" />
                </div>
                <div className="album-content">
                  <div className="album-title">{dataAlbum?.title}</div>
                  <div className="album-update">Cập nhật: {timeUpdate}</div>
                  <div className="album-artists">
                    <ArtistName
                      artists={dataAlbum?.artists ? dataAlbum.artists : []}
                    />
                  </div>
                  <div className="album-liked"></div>
                  <div className="album-description">
                    {dataAlbum?.sortDescription}
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`chart-list-container ${showList ? "show-all" : ""}`}
            >
              {dataAlbum ? (
                dataAlbum.song.items.map((item, index) => (
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

export default PlaylistDetail;
