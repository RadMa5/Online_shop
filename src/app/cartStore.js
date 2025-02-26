import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './components/CartReducer';

const cartStore = configureStore({
    reducer: {
        Cart: CartReducer
    }
});

export default cartStore;