import React, {useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchUniSearch} from "../store/action-creators/uniSearch"
import UniItem from "./UniItem";
const UniSearch = ()=>{
    const {unis, loading} = useSelector(state => state.uniSearch);
    const dispatch = useDispatch();
    const {country} = useParams();

    useEffect(() => {
        dispatch(fetchUniSearch(country));
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {
                <div className="uni-list">
                    {unis.map(u =>
                        <UniItem key={u.name} uni={u}/>
                    )}
                </div>
            }
        </div>
    );
}

export default UniSearch;