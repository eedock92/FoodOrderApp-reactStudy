import React, {useContext, useEffect, useState} from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/Cart-context';
import classes from './HeaderCartButton.Module.css'

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighLighted] = useState(false)
    const cartCtx = useContext(CartContext)

    /*빌드의 크기를 줄이기 위해 reduce를 사용 배열을 단일 값으로 변화 */
    /*curNumber는 기본적으로 reduce실행될 때 값 
    reduce 함수가 실행 되고나서 초기값으로 0을 세팅
    */
    const { items } = cartCtx;
    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if(items.length === 0){
            return
        }
        setBtnIsHighLighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighLighted(false)
        }, 300 );

        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return <button className={btnClasses} onClick={props.cartClickHandler}>
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