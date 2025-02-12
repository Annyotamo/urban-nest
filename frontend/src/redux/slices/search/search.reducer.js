export function setSearch(state, action) {
    console.log(action.payload);
    const search = action.payload;
    return { search, ...state.category };
}

export function setSearchCategory(state, action) {
    const category = action.payload;
    if (state.includes(category)) return state.filter((cat) => cat != category);
    return { search: state.search, category: [category, ...state] };
}
