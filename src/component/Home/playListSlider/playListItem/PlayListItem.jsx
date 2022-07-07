import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addSelectId, addSelectLink } from "../../../../actions/selectAlbum";

function PlayListItem(props) {
  const dispatch = useDispatch();
  const handleSelect = () => {
    const dataAlbum = {
      id: props.item.encodeId,
      link: props.item.link,
    };
    localStorage.setItem("Album", JSON.stringify(dataAlbum));
    dispatch(addSelectLink(props.item.link));
    dispatch(addSelectId(props.item.encodeId));
  };
  return (
    <div key={props.index} onClick={handleSelect}>
      <NavLink to={props.item.link} className="slider-item play-list-slider">
        <div className="opacity"></div>
        <img
          className="slider-img"
          src={props.item.thumbnail || props.item.banner}
          alt=""
        />
        <div></div>
      </NavLink>
      <NavLink to={props.item.link} className="link-title">
        <span>{props.item.title ? props.item.title : ""}</span>
      </NavLink>
      <span className="item-description">{props.item.sortDescription}</span>
    </div>
  );
}

export default PlayListItem;
