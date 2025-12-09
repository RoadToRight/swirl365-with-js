import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./slices/darkModeSlice"
import VideoSlice from "./slices/VideoSlice"
import { api } from "./Api/PortfolioAPi";

export const SwirlStore = configureStore({
    reducer: {
        darkMode: darkModeSlice,
        VideoIframe: VideoSlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware), // add the API middleware
})