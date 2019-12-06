const setHangupReducer = (state = {his_ringing: false}, action) => {  
    switch (action.type) {
      case 'CALL_HANGUP':
        return {his_ringing:true}
      default:
        return state
    }
  }
  
export default setHangupReducer;