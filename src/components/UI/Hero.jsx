import React from "react";
import "./Hero.css";
import SearchedImages from "../Render/SearchedImages";
import RandomImages from "../Render/RandomImages";
const Hero = (props) => {
  return (
    <section className="hero">
      {props.searched === true ? (
        <SearchedImages newData={props.newData} />
      ) : (
        <div className="random-images">
          <RandomImages pass={props.pass} newData={props.newData}/>
        </div>
      )}
    </section>
  );
};

export default Hero;
