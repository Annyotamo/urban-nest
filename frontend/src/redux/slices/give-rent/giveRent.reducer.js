export function setCategory(state, action) {
    if (state.category.find((item) => item === action.payload)) {
        const newCategories = state.category.filter((item) => item != action.payload);
        return {
            ...state,
            category: newCategories,
        };
    }

    return {
        ...state,
        category: [...state.category, action.payload],
    };
}

export function setLocation(state, action) {
    return {
        ...state,
        location: action.payload,
    };
}
