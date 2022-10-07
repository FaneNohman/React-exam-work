import React, {useMemo, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";

const UniForm = ()=>{
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const change = (event) => {
        setQuery(event.target.value);
    }
    const search = () => {
        navigate("/search/" + query);
    }

    return (
        <div>
            <form>
                <input type="text" value={query} onChange={change}/>
                <button onClick={search}>Поиск</button>
            </form>
        </div>
    );
}

export default UniForm;