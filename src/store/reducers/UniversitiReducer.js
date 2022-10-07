const defaultState = {
    universiti: {},
    loading: true
}

export const FETCH_UNI = "FETCH_UNI";
export const FETCH_UNI_SUCCESS = "FETCH_UNI_SUCCESS";


export const universitiReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_UNI:
            return {loading:true, universiti:{}}
        case FETCH_UNI_SUCCESS:
            return {loading: false, universiti: action.payload}
        default:
            return state;
    }
}

export const fetchUniversitiAction = () => ({type: FETCH_UNI});