import React from "react";
import "./style.css";
import BackgroundImage from '../../assets/images/vintage-wallpaper/vintage-wallpaper.png';

function Body(props) {
  return <div>
    <main className="Body" style={{backgroundImage: `url(${BackgroundImage})`}} {...props} />
    </div>

}

export default Body;
