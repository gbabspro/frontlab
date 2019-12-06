const listOperators = []; 

const OperatorsReducer = (state = listOperators, action) => {
    switch (action.type) {
        case 'LOAD_OPERATORS':
            return action.operators
        default: 
            return state
    }
}

export default OperatorsReducer;