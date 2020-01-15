
const micReducer = (state = {hasError: false, message: null}, action) => {  
    switch (action.type) {
      case 'MIC_NOT_FOUND':
        return {hasError: true, message: "Votre micro est introuvable"}
      default:
        return state
    }
  }
  
export default micReducer;