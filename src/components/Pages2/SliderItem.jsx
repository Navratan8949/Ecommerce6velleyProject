import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './SliderItem.css'
// import BasicRating from "./Rating";
// import Assestes from '../Assets/all_product'
import all_product from '../Assets/all_product'

const SliderItem = () => {
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

    // console.log(All_product)
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
    all_product.map((item,index)=>{
        return(



                <div className="hello">
                    <div className="slideImg" >
                        <img width={'200px'} height={'140px'} src={item.image} alt="" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                        {/* <BasicRating /> */}
                        <p>{item.name}</p>
                        <b>Qled 8k</b>
                        <span className="rupee">600$</span>


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

export default SliderItem;