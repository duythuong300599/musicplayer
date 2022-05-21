import React from "react";
import { NavLink } from "react-router-dom";
import "./ArtistName.css";

function ArtistName(props) {
  const dataArtists = props.artists;
  return (
    <>
      {dataArtists.map((item, index) => (
        <NavLink className="link-artists" key={index} to={item.link}>
          {item.name}
          <span> </span>
        </NavLink>
      ))}
    </>
  );
}

export default ArtistName;
