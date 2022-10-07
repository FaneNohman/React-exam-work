import React from "react";
import { Link } from "react-router-dom";

const UniItem = ({uni})=>{
    return(
        <Link to={`/name/${uni.name}`}>
            <div className="uni-item">
                <div>
                    <img src={"https://logo.clearbit.com/"+uni.domains[0]} alt="" />
                    <h3>{uni.country}</h3>
                    <h3>{uni.name}</h3>
                </div>
            </div>
        </Link>
    )
}

export default UniItem;