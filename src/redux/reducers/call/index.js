import { combineReducers } from "redux";
import setRingingReducer from "./callRingingReducer";
import callHangupReducer from "./callHangupReducer";
import callDestroy from "./callDestroy";

export default combineReducers({
    setRingingReducer,
    callHangupReducer,
    callDestroy
});
