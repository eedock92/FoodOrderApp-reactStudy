import { useReducer } from "react"

import CartContext from "./Cart-context"

const defaultCartState = {
    items : [],
    totalAmount : 0,
}

/*컴포넌트 밖에서 존재하며 컴포넌트가 재평가 될때마다 리랜더의 영향을 받지 않음 */
const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        
        //state에서 각 items들의 인덱스를 뽑는다
        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.item.id
            );
        console.log("1.CartProvider :" + existingCartItemIndex)

        const existingCartItem = state.items[existingCartItemIndex];
        console.log("2.CartProvider :" + existingCartItem)
        let updatedItems;

        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                amount : existingCartItem.amount + action.item.amount
            };
            //updatedItem에는 기존 item 복사
            updatedItems = [...state.items];
            console.log(updatedItems)
            updatedItems[existingCartItemIndex] = updatedItem;
            console.log(updatedItems[existingCartItemIndex])
        }else{
           //concat함수를 사용하여 새로운 배열 생성, 변화된 state를 건드리지 않고 새배열 만듬
            updatedItems = state.items.concat(action.item);
        }

      
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    if(action.type === 'REMOVE'){

        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.id
        );

        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;

        if(existingItem.amount === 1){
            updatedItems = state.items.filter(item => item.id !== action.id)
        }else {
            const updatedItem = {...existingItem, amount: existingItem.amount - 1};
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }

    }

    if(action.type === 'CLEAR'){
        return defaultCartState
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

    const clearCartHandler = () => {
        dispatchCartAction({
            type : 'CLEAR',
        })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount : cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem : removeItemFromCartHandler,
        clearCart : clearCartHandler
    }

    return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
    )
}

export default CartProvider