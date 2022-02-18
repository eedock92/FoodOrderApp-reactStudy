import React, {useContext} from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/Cart-context';
import classes from './HeaderCartButton.Module.css'

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext)

    /*빌드의 크기를 줄이기 위해 reduce를 사용 배열을 단일 값으로 변화 */
    /*curNumber는 기본적으로 reduce실행될 때 값 
    reduce 함수가 실행 되고나서 초기값으로 0을 세팅
    */
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

  

    return <button className={classes.button} onClick={props.cartClickHandler}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>카트</span>
        <span className={classes.badge}>
           {numberOfCartItems}
        </span>
    </button>
}

export default HeaderCartButton