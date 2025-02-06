import { createSlice } from "@reduxjs/toolkit";
import { setCategory, setFacilities, setLocation, setDetails, setImages } from "./giveRent.reducer.js";

const exampleState = {
    category: ["modern", "windmill", "lake"],
    location: {
        country: "London",
        latlng: [100, 100],
    },
    facilities: {
        rooms: 5,
        baths: 2,
        pets: true,
        more: ["wifi", "terrace"],
    },
    details: {
        price: 200,
        title: "Sweet home",
        description: "Welcome to our sweet home",
    },
    images: {
        name: "20240108_075239.jpg",
        preview: "blob:http://localhost:3000/37167848-dc2a-44ae-8dd2-1dbbcbacf509",
        size: 1942770,
        type: "image/jpeg",
    },
};

const initialState = {
    details: {
        title: "",
        price: 100,
        description: "",
    },
    location: {
        country: "",
        latLng: [51.505, -0.09], // array of 2 number (longitute and latitute)
    },
    category: [], // Array of strings
    facilities: {
        rooms: 1,
        baths: 1,
        pets: false,
        more: [], // Array of strings,
    },
    images: [], // Array of cloudinary string
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
        reset: () => initialState,
    },
});

export const { category, location, facilities, details, images, reset } = giveRentSlice.actions;
export default giveRentSlice.reducer;
