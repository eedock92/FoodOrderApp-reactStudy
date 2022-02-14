import React from 'react';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.Module.css'

const HeaderCartButton = props => {


    return <button className={classes.button} onClick={props.cartClickHandler}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>카트</span>
        <span className={classes.badge}>
            3
        </span>
    </button>
}

export default HeaderCartButton