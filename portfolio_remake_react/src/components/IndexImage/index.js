import React from "react";
import "./style.css";

function IndexImage(props) {
  return <img className="indexImage img-responsive" alt={props.name} src={props.image}/>

}

export default IndexImage;
