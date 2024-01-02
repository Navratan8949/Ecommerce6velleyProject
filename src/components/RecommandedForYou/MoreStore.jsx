import React from 'react'
import './MoreStore.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const iconstyle = {
    width: "25px",
    height: "20px",
    color: 'blue',
    cursor: "pointer"
};

const MoreStore = () => {
    return (
        <div className='MoreStore-main-container'>
            <div className="more-header">
                <h3> More Store  </h3>
                <h6>View </h6>
            </div>
            <div className="more-store-box">
                <div className="more1">
                    <img src="assestes/more1.png" alt="" />
                    <b>Digital Spot</b>
                    <p>1 Products</p>
                </div>

                <div className="more1">
                    <img src="assestes/more2.png" alt="" />
                    <b>Digital Spot</b>
                    <p>1 Products</p>
                </div>

                <div className="more1">
                    <img src="assestes/more3.png" alt="" />
                    <b>Digital Spot</b>
                    <p>1 Products</p>
                </div>

                <div className="more1">
                    <img src="assestes/more4.png" alt="" />
                    <b>Digital Spot</b>
                    <p>1 Products</p>
                </div>

                <div className="more1">
                    <img src="assestes/more5.png" alt="" />
                    <b>Digital Spot</b>
                    <p>1 Products</p>
                </div>
                <div className="more1">
                    <img src="assestes/more6.png" alt="" />
                    <b>Digital Spot</b>
                    <p>1 Products</p>
                </div>

                <div className="more1">
                    <img src="assestes/more7.png" alt="" />
                    <b>Digital Spot</b>
                    <p>1 Products</p>
                </div>
            </div>
        </div>
    )
}

export default MoreStore
