const setDestroyReducer = (state = {his_ringing: false}, action) => {  
    switch (action.type) {
      case 'CALL_DESTROY':
        return {his_ringing:true}
      default:
        return state
    }
  }
  
export default setDestroyReducer;