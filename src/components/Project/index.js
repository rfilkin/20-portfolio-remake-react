import React from "react";
import "./style.css";

function Project(props) {
  return (
    <div class="card">
    <img class="card-img-top" src={props.image} alt=""/>
    <div class="cardOverlay">
        <h3>{props.name}</h3>
        <a href={props.deployed} style={{backgroundColor: `yellow`}}>Deployed Version</a><br/>
        <a href={props.github} style={{backgroundColor: `yellow`}}>GitHub Repository</a>
    </div>
</div>
  );
}

export default Project;
