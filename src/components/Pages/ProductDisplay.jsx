import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import { ShopContext } from "./ShopContext";
import './ProductDisplay.css'

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const { removeToCart } = useContext(ShopContext);


  // Check if the 'product' object is defined
  if (!product) {
    return null; // or display a loading state or an error message
  }

  // Check if the 'image' property is defined
  if (!product.image) {
    return (
      <div>
        {/* Display an error message or placeholder image if 'image' is undefined */}
        <p>Error: Product image not available</p>
      </div>
    );
  }

  return (
    <div className="main-product-display-div">
      <div>
        {/* Displaying a single image */}
        <img src={product.image} alt="" />
      </div>
      <div className="display-left-div">
        <h4>{product.name}</h4>
        <div>
          {/* Displaying star icons */}
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          {/* Add content inside the paragraph as needed */}
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        {/* <button onClick={()=>{removeToCart(product.id)}}>remove From Cart TO CART</button> */}
        <p className="productdisplay-right-category">
          <span>Category:</span> Women, T-Shirt
        </p>

        <p className="productdisplay-right-category">
          <span>Tags:</span> Morden, Latest
        </p>
      <button className="Buy">BUY NOW</button>
      <button onClick={() => { addToCart(product.id) }} className="add-to-cart">ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductDisplay;
