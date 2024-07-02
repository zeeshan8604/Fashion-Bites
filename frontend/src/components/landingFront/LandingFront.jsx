import React from "react";
import Carousel from "./slide";
import data from "./data.js";
import "./LandingFront.css";

const LandingFront = () => {
  return (
    <div className="landingfront">
      <div className="left-front">
        <div>
          <h2>ℱ𝒾𝓃𝒹 𝒴ℴ𝓊𝓇 𝒮𝓉𝓎𝓁ℯ</h2>
        </div>
        <div className="slog">
          <p>Place For</p>
          <p>Fashion Freaks</p>
        </div>
        <div className="latest-btn">
          <button>Latest Collection</button>
        </div>
      </div>
      <div className="right-front">
        <Carousel data={data.slides} />
      </div>
    </div>
  );
};

export default LandingFront;

{
  /* <div>
          <img className="image1" src={Img1} alt="" />
        </div>
        <div className="img-left">
          <div>
            <img className="img2" src={Img2} alt="" />
          </div>
          <div>
            <img className="img3" src={Img3} alt="" />
          </div>
        </div> */
}
