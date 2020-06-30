import React from 'react'
import { ProductConsumer } from '../data/Context'
import CartIcon from '../Icons/CartIcon.png'
import '../Styles/Footer.css'

export default function CartDetails() {
    return (
        <ProductConsumer>
            {value => {
                const cartItems = value.handleFindCartItems()

                const { 
                    total
                } = cartItems

                return (
                    <>
                        <div className='cart-value'>
                            <img src={CartIcon} className='icon' />
                            {total ? (
                                <h2>
                                    ${total}
                                </h2>
                            ) : (
                                <h2>
                                    $0
                                </h2>
                            )}
                        </div>
                    </>
                )
            }}
        </ProductConsumer>
    )
}
