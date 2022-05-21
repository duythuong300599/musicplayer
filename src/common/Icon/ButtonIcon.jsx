import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ButtonIcon.css";

function ButtonIcon({ icon }) {
  return (
    <button className="btn btn-icon">
      <FontAwesomeIcon className="icon" icon={icon} />
    </button>
  );
}

export default ButtonIcon;
