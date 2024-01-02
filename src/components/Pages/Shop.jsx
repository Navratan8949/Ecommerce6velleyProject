import React from "react";

import Offer from "./Offer";
import NewCollection from "./NewCollection";
import Product from "./Product";
import Popular from "./Popular";
import Slidebar from "../Pages2/Slidebar";
import SecondProduct from '../Pages2/SecondProducts'
import TimeandSlider from "../Pages2/TimeandSlider";
import SecondProducts from "../Pages2/SecondProducts";
import TopStore from "../Pages2/TopStore";
import Recommand from '../RecommandedForYou/Recommand'
import MoreStore from '../RecommandedForYou/MoreStore'
import TopRatedProducts from "../TopRatedProducts/TopRatedProducts";
import Navbars from "./Navbars";



const Shop = () => {
  return (
    <div>
      {/* <Navbars /> */}
      <Slidebar />
      {/* <SecondProducts /> */}
      <TopStore />
      <Recommand />
      <MoreStore />
      <TopRatedProducts />



      {/* <TimeandSlider/> */}

      {/* <Offer /> */}
      {/* <Popular />
      <Product />
      <Offer />
      <NewCollection /> */}
    </div>
  );
};

export default Shop;
