const callStateReducer = (state = "", action) => {  
    switch (action.type) {
      case 'SET_CALL_STATE':
        return action.call_state
      default:
        return state
    }
  }
  
export default callStateReducer;