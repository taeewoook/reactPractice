import React from "react";
import { Link } from "react-router-dom";

function MenuItem(props) {
  return (
    <div className="menuItem">
      <Link to={props.link} target="_blank">
        <img src={props.image} alt={props.name} />
      </Link>
      <div className="menuDescription">
        <h3 className="menuName">앨범명 : {props.name}</h3>
        <p className="menuPrice">추천 노래 : {props.price}</p>
      </div>
    </div>
  );
}

export default MenuItem;
