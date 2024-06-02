import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: null
    },
    reducers: {
        setUser: (state, action) => {
            console.log(action);
            state.value = JSON.parse(localStorage.getItem("user")) || action.payload;
        },
        logout: (state) => {
            state.value = null,
            localStorage.removeItem("user");
            localStorage.removeItem("token")
        }
    }
})

export const { setUser, logout } = userSlice.actions

export const initializeUserState = () => {
    const userData = JSON.parse(localStorage.getItem("user")) || null;
    return {
      user: userData
    };
  };

export default userSlice.reducer;