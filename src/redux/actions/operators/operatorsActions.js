export const LoadOperators = (operators) => {
    
    return {
        type: 'LOAD_OPERATORS',
        operators: operators
    }
}


export const addOperator = (operator) => {
    
    return {
        type: 'ADD_OPERATOR',
        operator
    }
}
