import { configureStore } from '@reduxjs/toolkit';
import ItemReducer from './ItemReducer';
import CartReducer from './components/CartReducer';
import CurrentUserReducer from './CurrentUserReducer';

const store = configureStore({
    reducer: {
        Items: ItemReducer,
        Cart: CartReducer,
        CurrentUser: CurrentUserReducer,
    }
});

export default store;