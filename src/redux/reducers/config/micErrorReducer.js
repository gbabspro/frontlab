const setMicErrorReducer = (state = {has_error: false, error: ""}, action) => {  
    switch (action.type) {
      case 'HAS_MIC_ERROR':
        return action.error
      default:
        return state
    }
  }
  
export default setMicErrorReducer;