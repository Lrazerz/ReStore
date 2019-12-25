import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import ShopHeader from '../shop-header';

import {HomePage,CartPage} from "../pages";

import './app.css';


export default class App extends Component {

    render = () => {
        return (
            <main role='main' className='container'>
                <ShopHeader count={3} sum={74}/>
                <Switch>
                    <Route path='/' component={HomePage} exact/>
                    <Route path='/cart' component={CartPage}/>
                </Switch>




            </main>
        )
    }
}