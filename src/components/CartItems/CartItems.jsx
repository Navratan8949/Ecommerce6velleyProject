import React, { useContext } from 'react'
import { ShopContext } from '../Pages/ShopContext'
import star_icon from "../Assets/star_icon.png";
import remove_icon from '../Assets/cart_cross_icon.png'
import './CartItem.css'
import { MdDeleteForever } from "react-icons/md";

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext)
    return (
        <div className='cartitems'>

            <hr />
            {/* <div> */}

            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (<div className="cartitems-formate">
                        <img src={e.image} alt="" />
                        {/* <div style={{ alignItems: 'center' }}>
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />
                            <img src={star_icon} alt="" />(0)
                        </div> */}
                        <div className='Total-item'>

                            <p>New_Price :-{e.new_price}</p>
                            <p>Old_Price :-{e.old_price}</p>
                            <p> Quantity:- {cartItems[e.id]}</p>
                            <p> Total Price :-{e.new_price * cartItems[e.id]}</p>
                            <MdDeleteForever size={'26px'} onClick={() => { removeFromCart(e.id) }} />
                            <img alt="" />
                        </div>
                    </div>)
                }
                // <hr/>
                return null;
            })}
            {/* </div> */}
            <div className="cartitems-down">
                <div>
                    <h1>Cart Totals</h1>
                    <div>
                        <div>
                            <p>Subtitle</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>

                    <button>PROCESS TO CHECKOUT</button>
                </div>
                <div>
                    <p>if you have a promo code , enter it here</p>
                    <div>
                        <input type="text" placeholder='enter here ' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartItems
