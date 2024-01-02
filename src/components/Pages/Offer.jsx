import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Pages/CardSidebar.css";
// import '../Pages2/TimeandSlider.css'
import star_icon from "../Assets/star_icon.png"

import Item from "./Item";

import data_product from '../Assets/data';

// import RatingSize from "./Start";
// import new_collections from '../components/Assets/new_collections'
const Offer = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 10; // Change this to the total number of slides

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleSlideChange = (nextSlide) => {
    setCurrentSlide(nextSlide);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the current slide to create the infinite effect
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000); // Adjust the interval based on your requirements

    return () => clearInterval(interval);
  }, [currentSlide, totalSlides]);

  return (
    <>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={4000}
        keyBoardControl
        customTransition="transform 500ms ease-in-out"
        beforeChange={handleSlideChange}
        afterChange={handleSlideChange}
      >
        {
          data_product.map( (item,index) =>
          {
            return (
            
        <div className="Item">
          <div className="product-img-div">
            {/* <img key={index} src={Item.image} alt="" /> */}
       <Item key={index} id={item.id} name={item.name} image={item.image }
       
        new_price={item.new_price} old_price={item.old_price}/>
          <div className="productdisplay-right-star-icon">
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />(0)
        
        </div>

          </div>
          
          <div className="star-div">
            {/* <RatingSize /> */}
                  <p>{ Item.name}</p>
                  <span>{ Item.old_price}</span>
                  <p className="rate">{ Item.new_price}</p>
          </div>
        </div>
          )
            
          })

        
        }
      </Carousel>

     
      <div className="progress-bar">
        <div
          className=""
          style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
        ></div>
      </div>
    </>
  );
};

export default Offer;
