import {FETCH_UNI, FETCH_UNI_SUCCESS} from "../reducers/UniversitiReducer";
import axios from "axios";

export const fetchUniversiti = (name)=>{
    return async (dispatch) => {
            dispatch({type: FETCH_UNI});
            const response = await axios.get("http://universities.hipolabs.com/search?name="+name);
            dispatch({type: FETCH_UNI_SUCCESS, payload: response.data[0]})
    }
}