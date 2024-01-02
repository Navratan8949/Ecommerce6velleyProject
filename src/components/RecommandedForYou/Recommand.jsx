import React, { useState } from 'react'
import './Recommand.css'
import FeatureProducts from './FeatureProducts'
import BestSell from './BestSell'
import LatestProducts from './LatestProducts'

const Recommand = () => {
    const [button1, setButton1] = useState(true)
    const [button2, setButton2] = useState(false)
    const [button3, setButton3] = useState(false)

    return (
        <div className='recommand-main-div'>
            <div className="recommand-heading">
                <h3>
                    Recommanded For You
                </h3>
            </div>
            <div className='three-buttons'>
                <button className='button1' onClick={() => {
                    setButton1(true);
                    setButton2(false);
                    setButton3(false)
                }}>Feature Products</button>

                <button onClick={() => {
                    setButton1(false);
                    setButton2(true);
                    setButton3(false)
                }} >Best Selling</button>

                <button onClick={() => {
                    setButton1(false);
                    setButton2(false);
                    setButton3(true)
                }} >Latest Products</button>
            </div>
            <div className='products-box'>

                {button1 && (<FeatureProducts />)}
                {button2 && (<BestSell />)}
                {button3 && (<LatestProducts />)}
            </div>
        </div>
    )
}

export default Recommand
