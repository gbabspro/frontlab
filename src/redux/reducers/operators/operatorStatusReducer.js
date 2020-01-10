const OperatorStatusReducer = (state = false, action) => {
    switch (action.type) {
        case 'SET_LOGGED':
            return true
        default: 
            return state
    }
}

export default OperatorStatusReducer;