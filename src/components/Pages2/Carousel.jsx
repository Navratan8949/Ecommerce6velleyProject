import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const Carousel = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{ width: '530px' }}>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={3} aria-label="Slide 4" />

            </div>
            <div className="carousel-inner" style={{ borderRadius: '5px' }}>
                <div className="carousel-item active">
                    <img src="https://6valley-aster.6amtech.com/storage/app/public/banner/2023-06-13-6488573c55b90.png" className="d-block w-100" alt="..." />

                </div>

                <div className="carousel-item">
                    <img src="https://6valley-aster.6amtech.com/storage/app/public/banner/2023-06-13-648857136ea46.png" className="d-block w-100" alt="..." />

                </div>
                <div className="carousel-item">
                    <img src="https://6valley-aster.6amtech.com/storage/app/public/banner/2023-06-11-6485a06bd15af.png" className="d-block w-100" alt="..." />

                </div>
                <div className="carousel-item">
                    <img src="https://6valley-aster.6amtech.com/storage/app/public/banner/2023-06-11-6485a07be1019.png" className="d-block w-100" alt="..." />

                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-slide="prev">
                <span aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-slide="next">
                <span aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    );
};

export default Carousel;