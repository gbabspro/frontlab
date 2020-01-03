const listOperators = []; 

const OperatorsReducer = (state = listOperators, action) => {
    switch (action.type) {
        case 'LOAD_OPERATORS':
            return action.operators
        case 'ADD_OPERATOR':
                return [...state, action.operator]
        default: 
            return state
    }
}

const OperatorStatusReducer = (state = false, action) => {
    switch (action.type) {
        case 'SET_LOGGED':
            return true
        default: 
            return state
    }
}

export default OperatorsReducer || OperatorStatusReducer;