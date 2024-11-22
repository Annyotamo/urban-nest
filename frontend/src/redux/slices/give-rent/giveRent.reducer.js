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

export function setFacilities(state, action) {
    if (action.payload.type === "rooms") {
        return {
            ...state,
            facilities: {
                ...state.facilities,
                rooms: action.payload.data,
            },
        };
    }
    if (action.payload.type === "baths") {
        return {
            ...state,
            facilities: {
                ...state.facilities,
                baths: action.payload.data,
            },
        };
    }
    if (action.payload.type === "pets") {
        return {
            ...state,
            facilities: {
                ...state.facilities,
                pets: action.payload.data,
            },
        };
    }
    if (action.payload.type === "more") {
        return {
            ...state,
            facilities: {
                ...state.facilities,
                more: action.payload.data,
            },
        };
    }
}

export function setDetails(state, action) {
    if (action.payload.type === "price") {
        return {
            ...state,
            details: {
                ...state.details,
                price: action.payload.data,
            },
        };
    }
    if (action.payload.type === "title") {
        return {
            ...state,
            details: {
                ...state.details,
                title: action.payload.data,
            },
        };
    }
    if (action.payload.type === "description") {
        return {
            ...state,
            details: {
                ...state.details,
                description: action.payload.data,
            },
        };
    }
}
