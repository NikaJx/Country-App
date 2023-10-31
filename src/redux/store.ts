import { configureStore } from "@reduxjs/toolkit";
import countryReducer  from './countryApi/countrySlice';

export const store = configureStore({
    reducer: {
        country: countryReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;