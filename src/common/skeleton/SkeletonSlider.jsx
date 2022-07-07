import React from "react";
import Skeleton from "react-loading-skeleton";
import "./SkeletonSlider.css";

function SkeletonSlider() {
  return (
    <div className="skeleton-container">
      <div className="skeleton-wrapper">
        <div className="skeleton-item">
          <Skeleton />
        </div>
      </div>
      <div className="skeleton-wrapper">
        <div className="skeleton-item">
          <Skeleton />
        </div>
      </div>
      <div className="skeleton-wrapper">
        <div className="skeleton-item">
          <Skeleton />
        </div>
      </div>
    </div>
  );
}

export default SkeletonSlider;
