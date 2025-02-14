export function setSearch(state, action) {
    return { ...state, search: action.payload };
}

export function setSearchCategory(state, action) {
    const category = [...state.category];

    if (category.includes(action.payload)) {
        const index = category.indexOf(action.payload);
        category.splice(index, 1);
    } else {
        category.push(action.payload);
    }

    return { ...state, category: category };
}
