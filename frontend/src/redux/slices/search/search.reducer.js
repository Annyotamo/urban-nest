export function setSearch(state, action) {
    const search = action.payload;
    return search;
}

export function setSearchCategory(state, action) {
    const category = action.payload;
    if (state.includes(category)) return state.filter((cat) => cat != category);
    return [category, ...state];
}
