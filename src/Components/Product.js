import React from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../data/Context'
import CartIcon from '../Icons/CartIcon.png'
import '../Styles/Home.css'

export default function Product({ product }) {
    const {
        title,
        price,
        image,
        inCart
    } = product.fields      

    return (
        <>
            <ProductConsumer> 
                {value => (
                    <div className='product-container'>
                        <div className='product-image'>
                            <Link to='/details'>
                                <div className='product-picture' onClick={() => value.handleDetails(product.sys.id)}>
                                    <img src={image.fields.file.url} alt='PRODUCT' />
                                </div>
                            </Link>
                            <div className='cart-mini'>
                                <button>
                                    {inCart ? (
                                        <div className='incart-button-text' onClick={value.handleAdded}>In Cart</div>
                                    ) : (
                                        <div className='outcart-button-text' onClick={() =>{ 
                                            value.handleAddToCart(product.sys.id)
                                            value.handleShowModal(product.sys.id)
                                            console.log(value.cart);
                                            }}>
                                            <img src={CartIcon} alt='' className='icon' />
                                        </div>
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className='product-info'>
                            <span className='name'>{title}</span>
                            <span className='price'>${price}</span>
                        </div>
                    </div>
                )}
            </ProductConsumer>
        </>
    )
}
