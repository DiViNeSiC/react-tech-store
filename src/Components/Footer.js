import React from 'react'
import CartDetails from './CartDetails'
import PhoneIcon from '../Icons/PhoneIcon.png'
import TwitterIcon from '../Icons/TwitterIcon.png'
import FacebookIcon from '../Icons/FacebookIcon.png'
import InstagramIcon from '../Icons/InstagramIcon.png'
import '../Styles/Footer.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <ul className='footer-list'>
                <li className='footer-item item-contact'>
                    <div className='contact-div'>
                            <img src={PhoneIcon} className='icon phone-icon'/>
                            <div className='social-media-flex'>
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
            </ul>
            <div className='details-div'>
                Cart Value :
                <CartDetails />
            </div>
        </footer>
    )
}
