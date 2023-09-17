import React from "react";
import "./index.css";

const SearchedImages = (props) => {
  const imageStyle = {
    width: "200px",
    height: "200px",
    objectFit: "cover",
  };

  return (
    <div className="rendered-list">
      <div className="images">
        <ul>
          {props.newData.results?.length === 0 ? <h1>No images found</h1> :
            props.newData.results?.slice(0, 10).map((ele) => (
            <li key={crypto.randomUUID()}>
              <img
                src={ele.urls.regular}
                alt={ele.alt_description}
                style={imageStyle}
              />
              <p style={{textAlign: "center", textTransform: "capitalize"}}>{ele.alt_description}</p>
            </li>
          ))
        }
        </ul>
      </div>
    </div>
  );
};

export default SearchedImages;
