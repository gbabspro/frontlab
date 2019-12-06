const dialogReducer = (state = {}, action) => {  
    switch (action.type) {
      case 'SET_DIALOG':
        return action.dialog
      default:
        return state
    }
  }
  
export default dialogReducer;