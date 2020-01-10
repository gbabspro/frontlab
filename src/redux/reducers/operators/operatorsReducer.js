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

export default OperatorsReducer;