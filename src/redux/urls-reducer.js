const initialState = {
    urls: []
}

export const urlsReducer = (state = initialState, action) => {
    switch (action.type) {
        case '':
            return {
                ...state,
                urls: ''
            }

        default:
            return state;
    }
}