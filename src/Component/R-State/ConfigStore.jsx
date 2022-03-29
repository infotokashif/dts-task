import { combineReducers,createStore } from "redux";
import { groupReducer } from "./groupReducer";



export const ConfigStore=()=>{
    const myStore = createStore(combineReducers({
        groupReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return myStore
}




