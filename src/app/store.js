import { configureStore } from '@reduxjs/toolkit';
import ItemReducer from './ItemReducer';
import CartReducer from './components/CartReducer';

const store = configureStore({
    reducer: {
        Items: ItemReducer,
        Cart: CartReducer
    }
});

export default store;