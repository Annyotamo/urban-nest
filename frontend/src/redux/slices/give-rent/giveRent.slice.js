import { createSlice } from "@reduxjs/toolkit";
import { setCategory, setFacilities, setLocation, setDetails, setImages } from "./giveRent.reducer.js";

const initialState = {
    details: {
        title: "",
        price: 100,
        description: "",
    },
    location: {
        country: "",
        latLng: [51.505, -0.09],
    },
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
        images: setImages,
    },
});

export const { category, location, facilities, details, images } = giveRentSlice.actions;
export default giveRentSlice.reducer;
