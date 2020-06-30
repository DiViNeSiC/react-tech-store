import React from 'react'
import CartIcon from '../Icons/CartIcon.png'
import PhoneIcon from '../Icons/PhoneIcon.png'
import TwitterIcon from '../Icons/TwitterIcon.png'
import FacebookIcon from '../Icons/FacebookIcon.png'
import InstagramIcon from '../Icons/InstagramIcon.png'
import logo from '../logo/logo.svg'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                <li className='header'>
                    <Link to='/about-us' className='link'>
                        <img src={logo} className='logo' />
                    </Link>
                </li>
                <li>
                    <div className='navbar-item contact-selector'>
                        <img src={PhoneIcon} className='icon phone-icon'/>
                        <div className='social-media-grid'>
                            <a className='link'>
                                <img src={InstagramIcon} className='icon social-icon'/>
                            </a>
                            <a className='link'>
                                <img src={TwitterIcon} className='icon social-icon'/>
                            </a>
                            <a className='link'>
                                <img src={FacebookIcon} className='icon  social-icon'/>
                            </a>
                        </div>
                    </div>
                </li>
                <li  className='navbar-item product-selector'>
                    <Link to='/' className='link'>Products</Link>
                </li>
            </ul>
            <Link to='/cart' className='cart-selector link' >
                <div className='cart-icon'>
                    <img src={CartIcon} className='icon cart-icon' />
                </div>
                My cart
            </Link>
        </nav>
    )
}
