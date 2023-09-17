import React from "react";
import "./index.css";

const RandomImages = (props) => {
  const imageStyle = {
    width: "200px",
    height: "200px",
    objectFit: "cover",
  };

  return (
    <div className="rendered-list">
      <div className="strip"><h1>Search The Images You Want</h1></div>
    </div>
  );
};

export default RandomImages;
