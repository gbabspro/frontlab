// import external modules
import { combineReducers } from "redux";
import customizer from "./customizer/";
import micReducer from "./config/micReducer";
import dialogReducer from "./dialog/dialogReducer";
import callStateReducer from "./state/callStateReducer";
import chats from "./chat/chats";
import projectReducer from "./projects/projectsReducer"
import callReducer from "./call/";
import { reducer as toastrReducer } from "react-redux-toastr";
import currentProjectReducer from "./projects/currentProjectReducer";
import OperatorsReducer from "./operators/operatorsReducer";
import OperatorStatusReducer from "./operators/operatorStatusReducer";
import currentUser from "./user/userReducer";
import widgetReducer from "./widget/widgetReducer";


const rootReducer = combineReducers({
   toastr: toastrReducer, // <- Mounted at toastr.
   customizer: customizer,
   micConfig: micReducer,
   call: callReducer,
   dialog: dialogReducer,
   call_state: callStateReducer,
   chatState: chats,
   projects: projectReducer,
   currentProject: currentProjectReducer,
   operators: OperatorsReducer,
   currentUser: currentUser,
   widgetReducer: widgetReducer,
   operatorStatus: OperatorStatusReducer
});

export default rootReducer;
