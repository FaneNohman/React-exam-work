import React, {useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { fetchUniversiti } from "../store/action-creators/universiti";

const UniDetails = ()=>{
    const {universiti, loading} = useSelector(state => state.universiti);
    const dispatch = useDispatch();
    const {name} = useParams();

    useEffect(() => {
        dispatch(fetchUniversiti(name));
    }, [name])

    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <div>
                <img src={"https://logo.clearbit.com/" + universiti.domains[0]} alt=""/>
            </div>
            <div>
                <p>Name: {universiti.name}</p>
                <p>Country: {universiti.country}</p>
                <a href={universiti.web_pages[0]}>Web Page</a>
            </div>
        </div>
    );
}

export default UniDetails;