const  defaultState = {statut: "offline", loading: false};

const logSatutReducer = (state = defaultState, action) => {  
    switch (action.type) {
      case 'SET_ONLINE':
        return {statut: action.statut, loading: false}
      case 'SET_OFFLINE':
        return {statut: action.statut, loading: false}
      case 'IS_LOADING':
          return {statut : state.statut, loading: action.loading}
      default:
        return state
    }
  }
  
export default logSatutReducer;
