import {FETCH_SEARCH_UNIS, FETCH_SEARCH_UNIS_SUCCESS} from "../reducers/UniSearchReducer";
import axios from "axios";

export const fetchUniSearch = (country)=>{
    return async (dispatch) => {
            dispatch({type: FETCH_SEARCH_UNIS});
            const response = await axios.get("http://universities.hipolabs.com/search?name=&country="+country);
            dispatch({type: FETCH_SEARCH_UNIS_SUCCESS, payload: response.data})
    }
}