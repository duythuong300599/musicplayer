import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ButtonIcon.css";

function ButtonIcon(props) {
  return (
    <div className="btn-icon-wrapper">
      <button className="btn btn-icon">
        <FontAwesomeIcon className="icon" icon={props.icon} />
      </button>
    </div>
  );
}

export default ButtonIcon;
