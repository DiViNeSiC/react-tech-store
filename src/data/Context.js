import React from 'react'
import { items } from './productData'

const ProductContext = React.createContext()

class ProductProvider extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            products: [],
            productDetails: [],
            modalDetails: [],
            modalShow: false,
        }
    }

    componentDidMount() {
        this.setProducts()
    }

    setProducts = () => {
        let tempProducts = []
        items.forEach(item => {
            const newItem = { ...item }
            tempProducts = [...tempProducts, newItem]
        })
        this.setState({
            products: tempProducts,
        })
    }

    getItem = id => {
        const selectedItem = this.state.products.find(product => product.sys.id === id)
        return selectedItem
    }

    handleDetails = (id) => {
        const tempProducts = [...this.state.products]
        const product = this.getItem(id)
        this.setState(() => {
            return {
                products: tempProducts,
                productDetails: product
            }
        })
    }

    handleAddToCart = (id) => {
        const tempProducts = [...this.state.products]
        const product = this.getItem(id)
        product.fields.inCart = true
        product.fields.count = 1
        this.setState(() => {
            return {
                products: tempProducts,
            }
        })
        
    }

    handleShowModal = (id) => {
        const tempProducts = [...this.state.products]
        const product = this.getItem(id)
        this.setState(() => {
            return { 
                products: tempProducts, 
                productDetails: product,
                modalDetails: product,
                modalShow: true
            }
        })
    }

    handleCloseModal = () => {
        const tempProducts = [...this.state.products]
        this.setState(() => {
            return { 
                products: tempProducts,
                modalShow: false
            }
        })
    }

    handleAdded = () => {
        alert('This item already added to cart')
    }

    handleAddItem = (id) => {
        const product = this.state.products.find(item => item.sys.id === id)
        product.fields.count++
        this.setState(() => {
            return {
                products: [...this.state.products],
            }
        })
    }

    handleRemoveItem = (id) => {
        const product = this.state.products.find(item => item.sys.id === id)
        product.fields.count--
        this.setState(() => {
            return {
                products: [...this.state.products],
            }
        })
        
        if(product.fields.count < 1) this.handleDeleteItem(product.sys.id)
    }

    handleDeleteItem = (id) => {
        const product = this.state.products.find(item => item.sys.id === id)
        product.fields.inCart ? (
            product.fields.inCart = false
        ) : (
            alert(`This item isn't in your cart`)
        )
        this.setState(() => {
            return {
                products: [...this.state.products],
            }
        })
    }

    handleClearCart = () => {
        const tempProducts = [...this.state.products]
        tempProducts.map(product => {
            return product.fields.inCart = false
        })
        this.setState(() => {
            return {
                products: tempProducts
            }
        })
    }

    handleFindCartItems = () => {
        const items = [...this.state.products]
        const inCart = items.filter(item => item.fields.inCart )
        const subTotal = inCart.reduce((arr, curr) => {
            return arr += (curr.fields.count) * (curr.fields.price)
        },0)
        const tax = subTotal / 10
        const total = subTotal + tax

        const cartProducts = {
            inCart,
            subTotal,
            tax,
            total
        }

        return cartProducts
    }

    render() {
        return ( 
            <ProductContext.Provider value={{
                ...this.state,
                handleDetails: this.handleDetails,
                handleAddToCart: this.handleAddToCart,
                handleAdded: this.handleAdded,
                handleShowModal: this.handleShowModal,
                handleCloseModal: this.handleCloseModal,
                handleAddItem: this.handleAddItem,
                handleRemoveItem: this.handleRemoveItem,
                handleDeleteItem: this.handleDeleteItem,
                handleClearCart: this.handleClearCart,
                handleFindCartItems: this.handleFindCartItems
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }