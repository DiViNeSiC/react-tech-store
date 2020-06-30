import React from 'react'
import information from '../data/AboutUsFills'
import { Link } from 'react-router-dom'
import logo from '../logo/logo.svg'
import '../Styles/AboutUs.css'

export default function AboutUs() {
    const { companyName, creator, description, tel, email } = information
    return (
        <div className='about-us-div'>
            <div className='about-us'>
                <div className='title'>
                    <img src={logo} alt='' />
                </div>
                <div className='creator'>
                    Creator : {creator}
                </div>
                <div className='contact'>
                    <div className='tel'>
                        Tel : {tel}
                    </div>
                    <div className='email'>
                        Email : {email}
                    </div>
                </div>
                <Link to='/' className='home-link'>Back To Products</Link>
            </div>
        </div>
    )
}
