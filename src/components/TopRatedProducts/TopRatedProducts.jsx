import React, { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import './TopRatedProducts.css'
import SliderItem2 from "../Pages2/SliderItem2";
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const iconStyle = {
    borderRadius: '10px',
    background: 'rgb(91, 91, 182)',
    width: "35px",
    height: "30px",
    marginRight: '6px',
    color: 'white',
    cursor: "pointer"
    // Add any other styles you need
};


const TopRatedProducts = () => {

    return (
        <div className="main-timer-div">
            <div className="offer-all-data-div">
                <div className="sliderItems" >
                    <div className="Heading" >
                        <div>
                            <h3>
                                Top Rated Products
                            </h3>

                        </div>
                        <div>
                            {/* or */}
                            {/* <ChevronLeftIcon style={iconStyle} />
                            <ChevronRightIcon style={iconStyle} /> */}
                        </div>
                    </div>
                    <div>

                        <SliderItem2 />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default TopRatedProducts;