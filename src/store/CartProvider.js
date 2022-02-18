import { useReducer } from "react"

import CartContext from "./Cart-context"

const defaultCartState = {
    items : [],
    totalAmount : 0,
}

/*컴포넌트 밖에서 존재하며 컴포넌트가 재평가 될때마다 리랜더의 영향을 받지 않음 */
const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        //concat함수를 사용하여 새로운 배열 생성, 변화된 state를 건드리지 않고 새배열 만듬
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return defaultCartState
}

const CartProvider = props => {

   const [cartState, dispatchCartAction] = useReducer(cartReducer,defaultCartState )

    const addItemToCartHandler = item => {
        dispatchCartAction({
            type: 'ADD',
            item: item
        })
    }
    const removeItemFromCartHandler = id => {
        dispatchCartAction({
            type: 'REMOVE',
            id : id,
        })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount : cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem : removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider