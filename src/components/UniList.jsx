import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUnis} from "../store/action-creators/unis";
import UniItem from './UniItem';

const UniList = ()=>{
    const {unis, loading} = useSelector(state => state.unis);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUnis());
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

export default UniList;