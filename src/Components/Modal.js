import React from 'react'
import { ProductConsumer } from '../data/Context'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import '../Styles/Modal.css'

const modalElement = document.getElementById('modal')

export default function Modal() {
    return ReactDOM.createPortal (
        <ProductConsumer>
            {value => {
                const {
                    title,
                    price,
                    image,
                } = value.modalDetails.fields
                return (
                    <>
                        <div className='modal-container'>
                            <div className='modal-border'>
                                <div className='modal-image'>
                                    <h1>
                                        Item added to cart
                                    </h1>
                                    <Link to='/details'>
                                        <div className='modal-picture' onClick={() => {
                                            value.handleCloseModal()
                                            value.handleDetails(value.modalDetails.sys.id)
                                        }}>
                                            <img src={image.fields.file.url} alt='PRODUCT IMAGE' />
                                        </div>
                                    </Link>
                                </div>
                                <div className='modal-info'>
                                    <span className='name'>{title}</span>
                                    <span className='price'>${price}</span>
                                </div>
                                <div className='modal-buttons'> 
                                    <Link onClick={value.handleCloseModal} to='/cart' className='go-cart-link'>
                                        Go to Cart
                                    </Link>
                                    <button onClick={value.handleCloseModal} className='close-button'>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }}
        </ProductConsumer>
        ,
        modalElement
    )
}
