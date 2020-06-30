import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Default.css'

export default function Default() {
    return (
        <div className='default-container'>
            <h1 className='title'>
                Page not found
            </h1>
            <Link to='/' className='home-link'>Back To Products</Link>
        </div>
    )
}
