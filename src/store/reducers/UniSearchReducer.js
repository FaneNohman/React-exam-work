const defaultState = {
    unis: [],
    loading: false
}

export const FETCH_SEARCH_UNIS = "FETCH_SEARCH_UNIS";
export const FETCH_SEARCH_UNIS_SUCCESS = "FETCH_SEARCH_UNIS_SUCCESS";

export const unisSearchReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_SEARCH_UNIS:
            return {loading: true, unis: []}
        case FETCH_SEARCH_UNIS_SUCCESS:
            return {loading: false, unis: action.payload}
        default:
            return state;
    }
}

export const fetchUnisSearchAction = () => ({type: FETCH_SEARCH_UNIS});