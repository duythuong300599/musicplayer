import React from "react";
import { NavLink } from "react-router-dom";
import "./ArtistName.css";

function ArtistName(props) {
  const dataArtists = props.artists;
  return (
    <>
      {dataArtists.map((item, index) => (
        <span key={index}>
          {index > 0 ? <span>, </span> : ""}
          <NavLink className="link-artists" to={item.link}>
            {item.name}
          </NavLink>
        </span>
      ))}
    </>
  );
}

export default ArtistName;
