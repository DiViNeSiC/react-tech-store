import React from 'react';
import { Switch , Route } from 'react-router-dom'
import './Styles/App.css';
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import Details from './Components/Details'
import Cart from './Components/Cart'
import Default from './Components/Default'
import Footer from './Components/Footer'
import Modal from './Components/Modal'
import { ProductConsumer } from './data/Context'
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <>
      <ProductConsumer>
        {value => {
          return (
            <>
              <Navbar />
              <Switch>
                <Route exact path='/' component={ProductList} />
                <Route path='/cart' component={Cart} />
                <Route path='/details' component={Details} />
                <Route path='/about-us' component={AboutUs} />
                <Route component={Default} />
              </Switch>
              {value.modalShow && <Modal />}
            </>
          )
        }}
      </ProductConsumer>
      <Footer />
    </>
  );
}

export default App;
