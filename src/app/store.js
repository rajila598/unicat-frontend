import { configureStore } from "@reduxjs/toolkit";
import userReducer, { initializeUserState } from "./slice/userSlice";

export default configureStore({
    reducer: {
        user: userReducer,
    },
    // preloadedState: {
    //     user: initializeUserState()
    // }
});
