// import {
//    HANDLE_FILTER_USER,
//    HANDLE_SEND_MESSAGE,
//    HANDLE_SELECT_USER
// } from "../types/types";

// const filterUser = searchTerm => ({
//    type: HANDLE_FILTER_USER,
//    payload: searchTerm
// });

// const sendMsg = ({ chatMsg, currentUser, users: Users }) => ({
//    type: HANDLE_SEND_MESSAGE,
//    payload: { chatMsg, currentUser, Users }
// });

// const selectCurrentUser = ({ users, id }) => ({
//    type: HANDLE_SELECT_USER,
//    payload: { users, id }
// });

// export { filterUser, sendMsg, selectCurrentUser };

export const openChat = id => ({
    type: 'OPEN_CHAT',
    id
})

export const receivMsg = (chatMsg) => ({
    type: 'RECEIV_MSG',
    chatMsg: chatMsg
})

export const sendMsg = (chatMsg) => ({
    type: 'SEND_MSG',
    chatMsg: chatMsg
})