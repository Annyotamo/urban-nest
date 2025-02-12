export function setSearch(state, action) {
    console.log(action.payload);
    const search = action.payload;
    return { search, ...state.category };
}

export function setSearchCategory(state, action) {
    console.log(state.category);
    if (state.category.indexOf(action.payload) != -1) {
        const categories = state.category.filter((cat) => cat != action.payload);
        return { search: state.search, category: categories };
    }
    return { search: state.search, category: [action.payload, ...state.category] };
}
