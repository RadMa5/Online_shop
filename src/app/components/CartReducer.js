import { createSlice } from "@reduxjs/toolkit";

let cartArr = [];

export const CartReducer = createSlice({
    name: 'Cart',
    initialState: cartArr,
    reducers: {
        add: (state, action) => {
            state.push({id: action.payload.id, title: action.payload.title, desc: action.payload.desc, price: action.payload.price, img: action.payload.img});
            console.log(state.toString());
        }
    }
});

export const {add} = CartReducer.actions;
export default CartReducer.reducer;