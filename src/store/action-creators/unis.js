import {FETCH_UNIS, FETCH_UNIS_SUCCESS} from "../reducers/UnisReducer";
import axios from "axios";

export const fetchUnis = ()=>{
    return async (dispatch) => {
            dispatch({type: FETCH_UNIS});
            const response = await axios.get("http://universities.hipolabs.com/search");
            dispatch({type: FETCH_UNIS_SUCCESS, payload: response.data})
    }
}