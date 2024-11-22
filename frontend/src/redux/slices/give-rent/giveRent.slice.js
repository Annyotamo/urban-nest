import { createSlice } from "@reduxjs/toolkit";
import { setCategory, setFacilities, setLocation, setDetails } from "./giveRent.reducer.js";

const initialState = {
    name: "",
    details: {
        price: 100,
        title: "",
        description: "",
    },
    location: null,
    category: [],
    facilities: {
        rooms: 1,
        baths: 1,
        pets: false,
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
        facilities: setFacilities,
        details: setDetails,
    },
});

export const { category, location, facilities, details } = giveRentSlice.actions;
export default giveRentSlice.reducer;
