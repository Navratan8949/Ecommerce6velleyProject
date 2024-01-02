import cart from "../Assets/cart_icon.png"
import logo from "../Assets/6velleylogo.png"
// import TextField from '@mui/material/TextField';
import './Navbars.css'
import React, { useContext } from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
// import { CartContext } from './CartContext'; // Assuming you have a CartContext
import { ShopContext } from "./ShopContext";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext); // Use the correct context

  return (
    <div className='main-navbar-div'>
      <div>
        <img src={logo} width={'140px'} alt="" />
      </div>
      <div>

        <ul >
          <Link to='/'>shop</Link>
          <Link to='/mens'> men</Link>
          <Link to='/womens'>women</Link>
          <Link to='/kids'> kids </Link>
        </ul>

      </div>
      <div className="Cart"><Link to='/Cart'> <MdOutlineShoppingCart color="black" size={'33px'} /> </Link>
        <div className="numbers">{getTotalCartItems()}</div> {/* Call the function to get the total cart items */}
      </div>
    </div>
  );
};

export default Navbar;
