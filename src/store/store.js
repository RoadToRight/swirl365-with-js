import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./darkModeSlice"
import { api } from "./Api/PortfolioAPi";

export const SwirlStore = configureStore({
    reducer: {
        darkMode: darkModeSlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware), // add the API middleware
})