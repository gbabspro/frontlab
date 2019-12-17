const userDefault = {
    isAuthenticated: false
}; 

const currentUser = (state = userDefault, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return action.user
        default: 
            return state
    }
}

export default currentUser;