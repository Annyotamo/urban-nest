import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, action) => ({
            isAuthenticated: action.payload,
        }),
        logout: () => initialState,
    },
});

export default authSlice.reducer;
export const { setAuth } = authSlice.actions;
