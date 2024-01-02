import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './SliderItem2.css'
import star_icon from "../Assets/star_icon.png";

// import BasicRating from "./Rating";
import all_product from '../Assets/all_product'
import { Link } from "react-router-dom";

const SliderItem2 = () => {
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
                    all_product.map((item, index) => {
                        return (



                            <div className="hello-1">
                                <div className="top-heading">
                                    <b>Qled 8k</b>
                                    <p>Deluxe online</p>
                                    {/* <BasicRating /> */}

                                </div>
                                <Link to={`/Product/${item.id}`}>

                                    <div className="slideImg-1" >
                                        <img width={'80px'} src={item.image} alt="" />
                                        <img width={'80px'} src={item.image} alt="" />
                                        <img width={'80px'} src={item.image} alt="" />
                                    </div>
                                </Link>
                                <div>
                                    {/* Displaying star icons */}
                                    <img src={star_icon} alt="" />
                                    <img src={star_icon} alt="" />
                                    <img src={star_icon} alt="" />
                                    <img src={star_icon} alt="" />
                                </div>
                                <div className="star-div">
                                    {/* <RatingSize /> */}
                                    <p>{item.name}</p>
                                    <span>{item.old_price}</span>
                                    <p className="rate">{item.new_price}</p>
                                </div>


                            </div>
                        )
                    })
                }


            </Carousel>

            {/* Infinite progress bar */}
            <div className="progress-bar">
                <div
                    className=""
                    style={{ width: ` ${((currentSlide + 1) / totalSlides) * 100}%` }}
                ></div>
            </div>
        </>
    );
};

export default SliderItem2;