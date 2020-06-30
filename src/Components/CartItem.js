import React from 'react'
import TrashCan from '../Icons/TrashCan.png'
import '../Styles/Cart.css'

export default function CartItem({ cartProduct, handleAddItem, handleRemoveItem, handleDeleteItem }) {
    const {
        title,
        price,
        count,
        image 
    } = cartProduct.fields

    return (
        <div className='item-container'>
                <div className='pic'>
                    <img src={image.fields.file.url} className='img' />
                </div>
                <div className='info'>
                    <div className='name'>
                        {title}
                    </div>
                </div>
                <div className='main-price'>
                    <div className='price'>
                        ${price}
                    </div>
                </div>
                <div className='quantity'>
                    <button className='button' onClick={() => handleRemoveItem(cartProduct.sys.id)}>{`<`}</button>
                    <div className='count'> {count} </div>
                    <button className='button' onClick={() => handleAddItem(cartProduct.sys.id)}>{`>`}</button>
                </div>
                <div className='remove-item'>
                    <img src={TrashCan} className='icon' onClick={() => handleDeleteItem(cartProduct.sys.id)} />
                </div>
                <div className='total-price'>
                    {`Total Price: $${count * price}`}
                </div>
        </div>
    )
}
