const userDefault = {
    isAuthenticated: false
}; 

const currentUser = (state = userDefault, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return action.user
        case 'SET_LOGOUT':
            return {isAuthenticated: false}
        default: 
            return state
    }
}

export default currentUser;