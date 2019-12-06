const setRingingReducer = (state = {his_ringing: false}, action) => {  
    switch (action.type) {
      case 'CALL_RINGING':
        return {his_ringing:true}
      default:
        return state
    }
  }
  
export default setRingingReducer;