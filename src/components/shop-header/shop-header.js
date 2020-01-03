import React from 'react';
import {Link} from "react-router-dom";

import './shop-header.css';

const ShopHeader = ({count = 0, sum = 0}) => {
    return (
        <header className='shop-header row'>
            <Link to='/' className='logo text-dark'>ReStore</Link>
            <Link to='/cart'>
                <div className='shopping-cart'>
                    <i className='cart-icon fa fa-shopping-cart'/>
                    {count} items (${sum})
                </div>
            </Link>
        </header>
    )
};

export default ShopHeader;