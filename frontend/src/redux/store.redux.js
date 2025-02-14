import { configureStore } from "@reduxjs/toolkit";
import giveRent from "../redux/slices/give-rent/giveRent.slice.js";
import search from "../redux/slices/search/search.slice.js";
import auth from "../redux/slices/auth/auth.slice.js";

export const store = configureStore({
    reducer: {
        giveRent,
        search,
        auth,
    },
});
