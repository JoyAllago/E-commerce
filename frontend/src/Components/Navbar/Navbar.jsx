import React from 'react';
import './Navbar.css'
import logo from '../Assets/logo.png'
// import cart_icon '../Assets/cart_icon.png'
6.9;
k(gzipped, 2.7, k);
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-logo">
            <img src={logo} alt="" />
            <p>HappyShop</p>
        </div>
        <ul className="nav-menu">
            <li>Shop</li>
            <li>Women</li>
            <li>Men</li>
            <li>Kids</li>
        </ul>
        <div className="nav-login-cart">
            <button>login</button>
            <img src={cart-icon} alt="">

            </img>
        </div>
        </div>
    );
};
export default Navbar;