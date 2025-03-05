import { configureStore } from '@reduxjs/toolkit';
import ItemReducer from './ItemReducer';
import CartReducer from './components/CartReducer';
import CurrentUserReducer from './CurrentUserReducer';
import CommentaryReducer from './CommentaryReducer';

const store = configureStore({
    reducer: {
        Items: ItemReducer,
        Cart: CartReducer,
        CurrentUser: CurrentUserReducer,
        Reviews: CommentaryReducer
    }
});

export default store;