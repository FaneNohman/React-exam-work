import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import {unisReducer} from "./reducers/UnisReducer";
import {universitiReducer} from "./reducers/UniversitiReducer";
import {composeWithDevTools} from "@redux-devtools/extension";
import { unisSearchReducer } from "./reducers/UniSearchReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    unis: unisReducer,
    universiti: universitiReducer,
    uniSearch: unisSearchReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));