import { createSlice } from "@reduxjs/toolkit";
import { setCategory, setLocation } from "./giveRent.reducer.js";

const initialState = {
    name: "",
    price: "",
    location: null,
    category: [],
    facilities: {
        rooms: "",
        baths: "",
        more: [],
    },
    images: [],
};

const giveRentSlice = createSlice({
    name: "giveRent",
    initialState,
    reducers: {
        category: setCategory,
        location: setLocation,
    },
});

export const { category, location } = giveRentSlice.actions;
export default giveRentSlice.reducer;
