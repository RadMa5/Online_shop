import { configureStore } from '@reduxjs/toolkit';
import ItemReducer from './ItemReducer';

const store = configureStore({
    reducer: {
        Items: ItemReducer
    }
});

export default store;