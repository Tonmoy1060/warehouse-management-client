import React from "react";
import Banner from "../Banner/Banner";
import Inventory from "../Inventory/Inventory";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container">
        <Inventory></Inventory>
      </div>
    </div>
  );
};

export default Home;