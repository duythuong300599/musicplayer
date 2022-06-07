import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function RenderListSkeleton({ items }) {
  return Array(items)
    .fill(0)
    .map((item, index) => (
      <div className="chart-song-item" key={index}>
        <div className="list-item bor-b-1">
          <div className="media">
            <div className="media-left">
              <div className="song-thumb">
                <Skeleton width="40px" height="40px" />
              </div>
              <div className="card-info">
                <Skeleton
                  style={{
                    width: "400px",
                    borderRadius: "10px",
                    height: "12px",
                  }}
                />
                <Skeleton
                  style={{
                    width: "300px",
                    borderRadius: "10px",
                    height: "12px",
                  }}
                />
              </div>
            </div>

            <div className="media-content">
              <div className="album-info">
                <Skeleton
                  style={{
                    width: "40px",
                    borderRadius: "10px",
                    height: "12px",
                  }}
                />
              </div>
            </div>

            <div className="media-right">
              <div className="time-duration">
                <div className="item">
                  <Skeleton
                    circle
                    style={{ width: "25px", height: "25px", margin: "6px" }}
                  />
                  <Skeleton
                    circle
                    style={{ width: "25px", height: "25px", margin: "6px" }}
                  />
                  <Skeleton
                    circle
                    style={{ width: "25px", height: "25px", margin: "6px" }}
                  />
                  <Skeleton
                    circle
                    style={{ width: "25px", height: "25px", margin: "6px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
}

export default RenderListSkeleton;
