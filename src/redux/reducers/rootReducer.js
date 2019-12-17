// import external modules
import { combineReducers } from "redux";
import customizer from "./customizer/";
import setMicErrorReducer from "./config/micErrorReducer";
import dialogReducer from "./dialog/dialogReducer";
import callStateReducer from "./state/callStateReducer";
import chats from "./chat/chats";
import projectReducer from "./projects/projectsReducer"
import callReducer from "./call/";
import { reducer as toastrReducer } from "react-redux-toastr";
import currentProjectReducer from "./projects/currentProjectReducer";
import OperatorsReducer from "./operators/operatorsReducer";
import currentUser from "./user/userReducer";


const rootReducer = combineReducers({
   toastr: toastrReducer, // <- Mounted at toastr.
   customizer: customizer,
   micConfig: setMicErrorReducer,
   call: callReducer,
   dialog: dialogReducer,
   call_state: callStateReducer,
   chatState: chats,
   projects: projectReducer,
   currentProject: currentProjectReducer,
   operators: OperatorsReducer,
   currentUser: currentUser
});

export default rootReducer;
