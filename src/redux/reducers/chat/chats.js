const chatDefaultSate = []; 

const chats = (state = chatDefaultSate, action) => {
    switch (action.type) {
        case 'SEND_MSG':
            return [...state, action.chatMsg]
        case 'RECEIV_MSG':
            return [...state, action.chatMsg]
        default: 
            return state
    }
}

export default chats;