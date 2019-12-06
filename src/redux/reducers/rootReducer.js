// import external modules
import { combineReducers } from "redux";
import customizer from "./customizer/";
import setMicErrorReducer from "./config/micErrorReducer";
import dialogReducer from "./dialog/dialogReducer";
import callStateReducer from "./state/callStateReducer";
import chats from "./chat/chats";

import callReducer from "./call/";
import { reducer as toastrReducer } from "react-redux-toastr";

const rootReducer = combineReducers({
   toastr: toastrReducer, // <- Mounted at toastr.
   customizer: customizer,
   micConfig: setMicErrorReducer,
   call: callReducer,
   dialog: dialogReducer,
   call_state: callStateReducer,
   chatState: chats

});

export default rootReducer;
