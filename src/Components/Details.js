import React from 'react'
import { ProductConsumer } from '../data/Context'
import { Link } from 'react-router-dom'
import CartIcon from '../Icons/CartIcon.png'
import '../Styles/Details.css'

export default function Details() {
    return (
        <ProductConsumer>
            {value => {
                if (value.productDetails.fields === undefined) {
                    return (
                        <div className='error-message'>
                            <h1 className='message'>
                                NOT FOUND
                            </h1>
                            <Link to='/' className='selector-home'>
                                Back to products
                            </Link>
                        </div>
                    )
                }
                const {
                    title,
                    price,
                    company,
                    description,
                    image,
                    inCart
                } = value.productDetails.fields          
                return (
                    <div className='detail-container'>
                        <div className='detail-picture'>
                            <img src={image.fields.file.url} alt='PRODUCT IMAGE' className='detail-image' />
                        </div>
                        <div className='detail-info'>
                            <div className='info-title'>
                                <h1> {title} </h1>
                            </div>
                            <div className='info-price'>
                                <h2> ${price} </h2>
                            </div>
                            <div className='info-company'>
                                <h3> Company : {company} </h3>
                            </div>
                            <div className='info-description'>
                                {description}
                            </div>
                            <div className='info-buttons'>
                                <button className='add-cart-btn'>
                                    {inCart ? (
                                        <div onClick={value.handleAdded}>
                                            Added to cart
                                        </div>
                                    ) : (
                                        <div onClick={() => value.handleAddToCart(value.productDetails.sys.id)}>
                                            <img src={CartIcon} className='icon' />
                                            Add Cart
                                        </div>
                                    )} 
                                </button>
                                <Link to='/' className='selector-home'>
                                    Back to products
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }}
        </ProductConsumer>
    )
}
