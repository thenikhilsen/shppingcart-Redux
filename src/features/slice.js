import { createSlice } from "@reduxjs/toolkit";
import productData from '../productData';

const initialState = {
    cart: [],
    items: productData,
    totalQuantity: 0,
    totalPrice: 0
}

const sliceFun = createSlice({
    name: 'fun',
    initialState,
    reducers:{
        addToCart: (state,action)=>{
            let find = state.cart.findIndex((item) => item.id == action.payload.id);
            if(find >= 0){
                state.cart[find].quantity += 1; 
            }else{
                state.cart.push(action.payload);

            }
        },
        getCartTotal: (state) => {
            let {totalQuantity, totalPrice} = state.cart.reduce(
                (cartTotal, cartItem) => {
                    console.log("cartTotal", cartTotal);
                    console.log("cartItem", cartItem);

                    const { price, quantity } = cartItem;

                    console.log(price, quantity);

                    const itemTotal = price * quantity;

                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;

                    return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            );
            state.totalPrice = parseInt(totalPrice.toFixed(2));
            state.totalQuantity = totalQuantity;
        },

        removeItem: (state,action)=>{
            state.cart = state.cart.filter((item)=>item.id !== action.payload.id);
        },
        increaseItemQuantity: (state,action)=>{
            state.cart = state.cart.map((item)=>{
                if(item.id === action.payload){
                    return {...item, quantity : item.quantity + 1}
                }
                return item;
            })
        },
        decreaseItemQuantity: (state,action)=>{
            state.cart = state.cart.map((item)=>{
                if(item.id === action.payload){
                    return {...item, quantity : item.quantity - 1}
                }
                return item;
            })
        }
    }
})

export const {addToCart, getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity} = sliceFun.actions;
export default sliceFun.reducer;