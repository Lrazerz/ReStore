import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from "react-redux";

import ShopHeader from '../shop-header';

import {HomePage, CartPage} from "../pages";

import './app.css';

class App extends Component {

    render = () => {
        const {orderTotal, orderCountTotal} = this.props;

        return (
            <main role='main' className='container'>
                <ShopHeader count={orderCountTotal} sum={orderTotal}/>
                <Switch>
                    <Route path='/' exact>
                        <HomePage/>
                    </Route>
                    <Route path='/cart'>
                        <CartPage orderTotal={orderTotal}/>
                    </Route>
                </Switch>


            </main>
        )
    }
};

const mapStateToProps = ({shoppingCart: {cartItems}}) => {
    const orderTotal = cartItems.reduce((accumulator, item) => accumulator + item.totalPrice,0);
    const orderCountTotal = cartItems.reduce((accumulator, item) => accumulator + item.count, 0);
    return {orderTotal, orderCountTotal};
};

export default connect(mapStateToProps)(App);



