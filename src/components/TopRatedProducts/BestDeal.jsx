import React from 'react'
import './BestDeal.css'
import { Button, Rating } from '@mui/material'

const BestDeal = () => {
    return (
        <div className='bestdeal-main-container'>
            <div className="box-container">

                <div className="bestdealbox1">
                    <div className="bestdeal-row1">
                        <p style={{ color: 'gray', fontSize: '16px', fontWeight: '500' }}>Don't Miss the Chance</p>
                        <h5>Today's Best Deal</h5>
                        <br />
                        <b>Samsung Galaxy S21 Ultra...</b> <br />
                        <Rating />
                        <p > $4000</p>
                        <h4>SAVE $250.00</h4>
                        <button className='button'>BUY NOW</button>
                    </div>
                    <div className="bestdeal-row2">
                        <img width={'230px'} src="assestes/phone.png" alt="" />
                    </div>
                </div>
                <div className="bestdealbox2">
                    <h4><span style={{ color: 'blue' }}>Just</span>  For You</h4>
                    <div className="dealitembox">
                        <div className="dealrow1">
                            <div className="itme1">

                                <img src="assestes/blackheadphone.png" width={'110px'} alt="" />
                                <div className='rate'>
                                    <p className='line-through'>$400</p>
                                    <b>$450.00</b>
                                </div>
                            </div>
                            <div className="itme1">

                                <img src="assestes/book.png" width={'110px'} alt="" />
                                <div className='rate'>
                                    <p className='line-through'>$400</p>
                                    <b>$450.00</b>
                                </div>
                            </div>

                            <div className="itme1">

                                <img src="assestes/lcd.png" width={'110px'} alt="" />
                                <div className='rate'>
                                    <p className='line-through'>$400</p>
                                    <b>$450.00</b>
                                </div>
                            </div>
                        </div>
                        {/*  */}

                        <div className="dealrow1">
                            <div className="itme1">

                                <img src="assestes/tablet.png" width={'110px'} alt="" />
                                <div className='rate'>
                                    <p className='line-through'>$400</p>
                                    <b>$450.00</b>
                                </div>
                            </div>
                            <div className="itme1">

                                <img src="assestes/projecter.png" width={'110px'} alt="" />
                                <div className='rate'>
                                    <p className='line-through'>$400</p>
                                    <b>$450.00</b>
                                </div>
                            </div>

                            <div className="itme1">

                                <img src="assestes/lcd2.png" width={'110px'} alt="" />
                                <div className='rate'>
                                    <p className='line-through'>$400</p>
                                    <b>$450.00</b>
                                </div>
                            </div>
                        </div>

                        {/*  */}

                        <div className="dealrow2">
                            <div className="itme1">

                                <img src="assestes/iphone.png" width={'110px'} alt="" />
                                <div className='rate'>
                                    <p className='line-through'>$400</p>
                                    <b>$450.00</b>
                                </div>
                            </div>
                            <div className="itme1">

                                <img src="assestes/laptop.png" width={'110px'} alt="" />
                                <div className='rate'>
                                    <p className='line-through'>$400</p>
                                    <b>$450.00</b>
                                </div>
                            </div>

                            {/* <div className="itme1">

                                <img src="assestes/lcd.png" width={'110px'} alt="" />
                                <div className='rate'>
                                    <p className='line-through'>$400</p>
                                    <b>$450.00</b>
                                </div>
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default BestDeal
