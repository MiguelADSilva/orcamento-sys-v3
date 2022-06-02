import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { orcamentoAPI } from '../orcamentoAPI.js';

export default configureStore({
    reducer: { 
        [orcamentoAPI.reducerPath]: orcamentoAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(orcamentoAPI.middleware)
});