import { createSlice } from "@reduxjs/toolkit";
import { setSearch, setSearchCategory } from "./search.reducer";

const initialState = {
    search: "",
    category: [],
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        search: setSearch,
        category: setSearchCategory,
        reset: () => initialState,
    },
});

export const { search, category, reset } = searchSlice.actions;
export default searchSlice.reducer;
