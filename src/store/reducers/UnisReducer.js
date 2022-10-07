const defaultState = {
    unis: [],
    loading: false
}

export const FETCH_UNIS = "FETCH_UNIS";
export const FETCH_UNIS_SUCCESS = "FETCH_UNIS_SUCCESS";

export const unisReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_UNIS:
            return {loading: true, unis: []}
        case FETCH_UNIS_SUCCESS:
            return {loading: false, unis: action.payload.slice(0,100)}
        default:
            return state;
    }
}

export const fetchUnisAction = () => ({type: FETCH_UNIS});