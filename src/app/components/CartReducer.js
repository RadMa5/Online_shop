import { createSlice } from "@reduxjs/toolkit";

let cartArr = [];

export const CartReducer = createSlice({
    name: 'Cart',
    initialState: cartArr,
    reducers: {
        add: (state, action) => {
            let currArray = [];
            let noDuplicates = true;
            state.map((prod) => {
                currArray.push({id: prod.id, title: prod.title, desc: prod.desc, price: prod.price, img: prod.img, size: prod.size});
            });

            for (let i = 0; i < currArray.length; i ++) {
                if (action.payload.id == currArray[i].id){
                    noDuplicates = false;
                    break;
                }
            }
            if (noDuplicates) {
                state.push({id: action.payload.id, title: action.payload.title, desc: action.payload.desc, price: action.payload.price, img: action.payload.img, size: action.payload.size, amount: 1});
            }
        },
        remove: (state, action) => {
            const productId = state.findIndex((value) => {
                return value.id >= action.payload;
            });
            state.splice(productId, 1);
        },
        removeAll: (state) => {
            state.splice(0, 999);
        },
        changeAmount: (state, action) => {
            const amount = action.payload.amount;
            const productId = state.findIndex((value) => {
                return value.id >= action.payload.id;
            });
            state[productId].amount = amount;
        }
    }
});

export const {add, remove, removeAll, changeAmount} = CartReducer.actions;
export default CartReducer.reducer;