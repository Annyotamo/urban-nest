import { configureStore } from "@reduxjs/toolkit";
import giveRent from "../redux/slices/give-rent/giveRent.slice.js";

export const store = configureStore({
    reducer: {
        giveRent,
    },
});
