import React from "react";
import "./style.css";

function ArticleHeader(props) {
  return <div>
    <h2><main className="articleHeader" {...props} /></h2>
    <hr/>
    </div>

}

export default ArticleHeader;
