export const setOffLine = () => {
    
    return {
        type: 'SET_OFFLINE',
        statut: "offline",
        loading: false
    }
}

export const isLoading = () => {
    
    return {
        type: 'IS_LOADING',
        loading: true
    }
}
