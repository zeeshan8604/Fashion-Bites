import React from "react";
import LandingFront from "../components/landingFront/LandingFront";
import Popular from "../components/Popular/Popular";
import Offers from "../components/Offers/Offers";
import Tranding from "../components/Tranding/Tranding";
import ClothingCenter from "../components/ClothingCenter/ClothingCenter";
const Shop = () => {
  return (
    <div>
      <LandingFront />
      <Popular />
      <Offers />
      <ClothingCenter />
      {/* <Tranding /> */}
    </div>
  );
};

export default Shop;
