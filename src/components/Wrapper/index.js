import React from "react";
import "./style.css";
import Push from "../Push";

function Wrapper(props) {
  return <div>
    <main className="wrapper" {...props} />;
    <Push></Push>
    </div>

}

export default Wrapper;
