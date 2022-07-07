import React from "react";
import Slider from "react-slick/lib/slider";
import PlayListItem from "./playListItem/PlayListItem";
import "./playListSlider.css";

function PlayListSlider(props) {
  const { items, slide } = props;

  const settings = {
    slidesToShow: slide,
  };

  return (
    <div className="container">
      <div className="slider-container">
        <div className="slider-title">{items ? items.title : null}</div>
        {items ? (
          <Slider {...settings}>
            {items.items.map((item, index) => (
              <PlayListItem key={index} item={item} />
            ))}
          </Slider>
        ) : null}
      </div>
    </div>
  );
}

export default PlayListSlider;
