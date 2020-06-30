import React from 'react'
import Product from './Product'
import { ProductConsumer } from '../data/Context'
import '../Styles/Home.css'

export default function ProductList() {
    return (
        <>
            <h1 className='product-header'>Products</h1>
            <div className='products-grid'>
                <ProductConsumer>
                    {value => {
                        return value.products.map(product => {
                            return <Product key={product.sys.id} product={product} />
                        })
                    }}
                </ProductConsumer>
            </div>
        </>
    )
}
