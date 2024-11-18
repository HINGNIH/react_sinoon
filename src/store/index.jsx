import { configureStore } from '@reduxjs/toolkit';
import notice from './modules/noticeSlice';
import cart from './modules/cartSlice';
import pagenation from './modules/pagenationSlice'
import customer from './modules/customerSlice'
import auth from './modules/authSlice'

export const store = configureStore({
    reducer: {
        notice,
        cart,
        pagenation,
        customer,
        auth,
    },
});
