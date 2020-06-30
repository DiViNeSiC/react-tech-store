import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { ProductConsumer } from '../data/Context'
import CartItem from './CartItem'
import '../Styles/Cart.css'
import PayPal from './PayPal'

export default function Cart() {
    return (
        <>
            <ProductConsumer>
                {value => {
                    const cartItems = value.handleFindCartItems()
                    
                    const { 
                        inCart,
                        subTotal,
                        tax,
                        total
                    } = cartItems

                    return (
                        <>
                            <div className='cart-item-grid'>
                                {inCart.map(item => {
                                    return <CartItem 
                                            key={item.sys.id} 
                                            cartProduct={item} 
                                            handleAddItem={value.handleAddItem}
                                            handleRemoveItem={value.handleRemoveItem}
                                            handleDeleteItem={value.handleDeleteItem}
                                            />
                                })}
                            </div>
                            {inCart.length > 0 ? (
                                <div className='details'>
                                <div className='clear-all-btn'>
                                    <button onClick={value.handleClearCart}>Clear Cart</button>
                                </div>
                                <div className='subtotal'>
                                    SubTotal : ${subTotal}
                                </div>
                                <div className='tax'>
                                    Tax : ${tax}
                                </div>
                                <div className='total'>
                                    Total : ${total}
                                </div>
                                <div className='purchase'>
                                    <PayPal 
                                        total={total} 
                                        clearCart={value.handleClearCart} 
                                        history={useHistory} 
                                    />
                                </div>
                            </div>
                            ) : (
                                <div className='nothing-is-here'>
                                    Your cart is empty
                                    <Link className='home-link' to='/'>Back to Products</Link>
                                </div>
                            )}
                        </>
                    )
                }}
            </ProductConsumer>
        </>
    )
}
